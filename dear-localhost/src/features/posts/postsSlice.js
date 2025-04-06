import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    title: "Learning redux 1 ",
    content: "AA 1",
    datetime: sub(new Date(), { minutes: 120 }).toISOString(),
    reactions: {
      like: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 2,
    title: "Learning redux 2",
    content: "AA 2",
    datetime: sub(new Date(), { minutes: 120 }).toISOString(),
    reactions: {
      like: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 3,
    title: "Learning redux 3",
    content: "AA 3",
    datetime: sub(new Date(), { minutes: 120 }).toISOString(),
    reactions: {
      like: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: {
      reducer(state, action) {
        state.push(action.payload);
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
      const existingPost = state.find((post) => post.id === postId); // burada = yaparsan atama yapar ve hata verir
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { addPosts, addReaction } = postsSlice.actions;

export default postsSlice.reducer;

//state --> uygulamanin o anki verisi
//action --> ne yapmak istiyorsun (ekle, sil)
//payload --> yapilacak islemin verisi (ornegin: eklenecek olan post, gonderilecek id vb)
//reducer --> gelen action'a gore state'i guncelleyen fonksiyon
