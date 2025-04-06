import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Fatma" },
  { id: "1", name: "Mert" },
  { id: "2", name: "Mehmet" },
  { id: "3", name: "Ayşe" },
  { id: "4", name: "Ali" },
];

const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
