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
          bookmarkItem.sectionNum !== action.payload.docid &&
          bookmarkItem.partLabel !== action.payload.partLabel &&
          bookmarkItem.sectionHeading !== action.payload.sectionHeading
      );
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
