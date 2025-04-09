import { useSelector, useDispatch } from "react-redux"; //useSelector -> store icindeki state'leri okumak icin kullanilir
import React from "react";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "../features/posts/postsSlice";
import PostExcerpt from "../components/postExcertpt.js";

import { useEffect } from "react";

const PostList = () => {
  //   const posts = useSelector((state) => state.posts); // Bu şekilde yapılabilir ama eger state'in sekli degisirse hata aliriz

  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts()); //Eğer şu an hiçbir veri çekilmemişse (yani postsStatus "idle" ise),  fetchPosts() action’ını çalıştır.
    }
  }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.toString().localeCompare(a.date)); // yeni tarihli postlari basa koy sirala
    content = orderedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{postsError}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostList;
