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
    //title, this is the name of the Screen as per the LegislationStackNavigator.
    //This is used as a lookup to obtain the "short version" of the legislation name for output to the device as well as determine which screen the bookmark will return to.
    // eg.  "Criminal Code of Canada"
    //sectionNum, the section number of the specific legislation being passed. eg. 83.05
    //partLabel, the part of the legislation where the section number sits. eg. PART III
    //sectionHeading, - the description of the specific legislation.  eg. List of Entities
    //legislation - this is the short form of the legislation used for display purposes.  eg.  Crim Code
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
