import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const posts = [
];

export const postSlice = createSlice({
  name: "posts",
  initialState: posts,
  reducers: {
    add: (state, action) => {
      const data = {
        id: nanoid(2),
        name: action.payload,
      };

      state.unshift(data);
    },
    remove: (state, action) => {
      return state.filter((state) => state.id !== action.payload);
    },
  },
});

export const { add, remove } = postSlice.actions;
export default postSlice.reducer;
