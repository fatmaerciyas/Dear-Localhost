import React from "react";
import { useDispatch } from "react-redux";
import { addReaction } from "../features/posts/postsSlice";

const reactionEmoji = {
  like: "😊",
  wow: "🤩",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(
            addReaction({
              postId: post.id,
              reaction: name,
            })
          )
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;

//Thunks: widdleware to make async methods
