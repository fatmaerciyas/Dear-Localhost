import { useSelector } from "react-redux";
import { selectAllUsers } from "../features/users/userSlice";

import React from "react";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);

  return <span>by {author ? author.name : "Unknown author"}</span>;
};

export default PostAuthor;
