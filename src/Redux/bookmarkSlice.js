import { createSlice } from "@reduxjs/toolkit";

//redux store for bookmarks

const initialState = {
  bookmarkArray: [
    {
      legislation: "CrimCode",
      sectionNum: "424.1(b)",
      partLabel: "PART X",
      sectionHeading:
        "Breach of Contract, Intimidation and Discrimination Against Trade Unionists",
    },
    // {
    //   legislation: "MVA",
    //   sectionNum: "3 (4.1)",
    //   partLabel: "Part 1",
    //   sectionHeading: "Registration, licence and insurance",
    // },
    // {
    //   legislation: "CrimCode",
    //   sectionNum: "430(3)(b)",
    //   partLabel: "PART XI",
    //   sectionHeading: "Mischief",
    // },
    // {
    //   legislation: "MVA",
    //   sectionNum: "3 (10)(c)(Continued)",
    //   partLabel: "Part 1",
    //   sectionHeading: "Registration, licence and insurance",
    // },
    // {
    //   legislation: "CrimCode",
    //   sectionNum: "320.14(4)",
    //   partLabel: "PART VIII.1",
    //   sectionHeading: "Offences and Punishment",
    // },
    // {
    //   legislation: "MVA",
    //   sectionNum: "126",
    //   partLabel: "Part 3",
    //   sectionHeading: "Traffic control signals",
    // },
    // {
    //   legislation: "CrimCode",
    //   sectionNum: "503(3)(b)(ii)",
    //   partLabel: "PART XVI",
    //   sectionHeading: "Appearance of Accused before Justice",
    // },
  ],
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
