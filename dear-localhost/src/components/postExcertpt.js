import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo.js";
import ReactionButtons from "./ReactionButtons";

const postExcertpt = ({ post }) => {
  return (
    <>
      <article>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <p>{post.datetime}</p>
        <p className="postCredit">
          <PostAuthor userId={post.userId} />

          <TimeAgo timestamp={post.datetime} />
        </p>
        <ReactionButtons post={post} />
      </article>
    </>
  );
};

export default postExcertpt;
