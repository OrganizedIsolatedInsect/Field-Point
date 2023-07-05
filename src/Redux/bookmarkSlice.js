import { createSlice } from "@reduxjs/toolkit";

//redux store for bookmarks

const initialState = {
  bookmarkArray: [],
};

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    //adding the payload adds 5 items to the bookmark Array
    //title, sectionNum, partLabel, sectionHeading, legislation
    addBookmark: (state, action) => {
      state.bookmarkArray.push(action.payload);
    },
    //removing the item requires that at least 4 items match, this is to ensure that when we add similar legislation to the app, there is no mistake.
    removeBookmark: (state, action) => {
      state.bookmarkArray = state.bookmarkArray.filter(
        bookmarkItem =>
          !(
            bookmarkItem.legislation == action.payload.legislation &&
            bookmarkItem.sectionNum == action.payload.sectionNum &&
            bookmarkItem.partLabel == action.payload.partLabel &&
            bookmarkItem.sectionHeading == action.payload.sectionHeading
          )
      );
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;

//NOTES: filtering out data requires a !() and not a !==.
