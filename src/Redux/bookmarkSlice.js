import { createSlice } from "@reduxjs/toolkit";

//redux store for boookmarks

const initialState = {
  bookmarkItem: [],
};

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      state.bookmarkItem.push(action.payload);
    },
    removeBookmark: (state, action) => {
      state.bookmarkItem = state.bookmarkItem.filter(
        bookmarkItem =>
          bookmarkItem.legislation !== action.payload.legislation &&
          bookmarkItem.docid !== action.payload.docid
      );
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
