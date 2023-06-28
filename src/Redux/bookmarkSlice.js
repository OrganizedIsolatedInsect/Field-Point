import { createSlice } from "@reduxjs/toolkit";

//redux store for bookmarks

const initialState = {
  bookmarkArray: [],
};

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      state.bookmarkArray.push(action.payload);
    },
    removeBookmark: (state, action) => {
      state.bookmarkArray = state.bookmarkArray.filter(
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
