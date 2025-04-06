import { useSelector } from "react-redux"; //useSelector -> store icindeki state'leri okumak icin kullanilir
import React from "react";
import { selectAllPosts } from "../features/posts/postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo.js";
import ReactionButtons from "./ReactionButtons";

const PostList = () => {
  //   const posts = useSelector((state) => state.posts); // Bu şekilde yapılabilir ama eger state'in sekli degisirse hata aliriz
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>{post.datetime}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />

        <TimeAgo timestamp={post.datetime} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostList;
