import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  posts: [],
  status: "idle", //idle | loading | succeeded | failed
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get(POSTS_URL);
    return [...response.data];
  } catch (error) {
    return error.message;
  }
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            datetime: new Date().toISOString(),
            userId,
            reactions: {
              like: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    addReaction(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId); // burada = yaparsan atama yapar ve hata verir
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
  extraReducers: (builder) => {
    //slice'in disinda parametre tanimamiza yarar
    builder //fetch icin pending,fullfiled and rejected
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";

        //Manuel olarak date ve reactionlar ekledim
        let min = 1;
        const loadedPosts = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString;
          post.reactions = {
            thumbsUp: 0,
            hooray: 0,
            heart: 0,
            rocket: 0,
            eyes: 0,
          };
          return post;
        });

        //Add any fetched posts to the array
        state.posts = state.posts.concat(loadedPosts);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

//Initial State icindeki tum degerleri dispatch ile kullanabilmek icin export ediyorum
export const selectAllPosts = (state) => state.posts.posts; // ilk post store adi, 2. post ise initialState'deki dizi
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export const { addPosts, addReaction } = postsSlice.actions;

export default postsSlice.reducer;

//state --> uygulamanin o anki verisi
//action --> ne yapmak istiyorsun (ekle, sil)
//payload --> yapilacak islemin verisi (ornegin: eklenecek olan post, gonderilecek id vb)
//reducer --> gelen action'a gore state'i guncelleyen fonksiyon

//pending : action is in progress,
//fulfilled : action has successfully completed
//rejected : action has failed

// createAsyncThunk ile olusturdugum metodlarimi daha sonra dispatch() icerisinde cagirabiliyorum
