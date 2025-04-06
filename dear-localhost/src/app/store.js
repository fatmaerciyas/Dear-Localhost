import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postsSlice.js";
import userSlice from "../features/users/userSlice.js";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userSlice,
  },
});
