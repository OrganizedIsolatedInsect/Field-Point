//https://redux.js.org/usage/writing-tests -> Unit Testing Individual Functions

import reducer, {
  addBookmark,
  removeBookmark,
} from "../src/Redux/bookmarkSlice.js";

describe("Bookmark Redux test list of bookmark items", () => {
  test("Should return the INITIAL STATE", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      bookmarkArray: [],
    });
  }); //passes

  test("Should handle a record being ADDED to an EMPTY array", () => {
    const previousState = { bookmarkArray: [] };
    let newObject = {
      legislation: "CrimCode",
      sectionNum: "424.1(b)",
      partLabel: "PART X",
      sectionHeading:
        "Breach of Contract, Intimidation and Discrimination Against Trade Unionists",
    };

    expect(reducer(previousState, addBookmark(newObject))).toEqual({
      bookmarkArray: [
        {
          legislation: "CrimCode",
          sectionNum: "424.1(b)",
          partLabel: "PART X",
          sectionHeading:
            "Breach of Contract, Intimidation and Discrimination Against Trade Unionists",
        },
      ],
    });
  });

  test("Should handle ADDING ANOTHER bookmark to array", () => {
    const previousState = {
      bookmarkArray: [
        {
          legislation: "CrimCode",
          sectionNum: "424.1(b)",
          partLabel: "PART X",
          sectionHeading:
            "Breach of Contract, Intimidation and Discrimination Against Trade Unionists",
        },
      ],
    };

    let newObject = {
      legislation: "MVA",
      sectionNum: "3 (4.1)",
      partLabel: "Part 1",
      sectionHeading: "Registration, licence and insurance",
    };
    expect(reducer(previousState, addBookmark(newObject))).toEqual({
      bookmarkArray: [
        {
          legislation: "CrimCode",
          sectionNum: "424.1(b)",
          partLabel: "PART X",
          sectionHeading:
            "Breach of Contract, Intimidation and Discrimination Against Trade Unionists",
        },
        {
          legislation: "MVA",
          sectionNum: "3 (4.1)",
          partLabel: "Part 1",
          sectionHeading: "Registration, licence and insurance",
        },
      ],
    });
  });

  test("Should handle REMOVING a bookmark from array", () => {
    const previousState = {
      bookmarkArray: [
        {
          legislation: "CrimCode",
          sectionNum: "424.1(b)",
          partLabel: "PART X",
          sectionHeading:
            "Breach of Contract, Intimidation and Discrimination Against Trade Unionists",
        },
        {
          legislation: "MVA",
          sectionNum: "3 (4.1)",
          partLabel: "Part 1",
          sectionHeading: "Registration, licence and insurance",
        },
      ],
    };
    let objToBeRemoved = {
      legislation: "CrimCode",
      sectionNum: "424.1(b)",
      partLabel: "PART X",
      sectionHeading:
        "Breach of Contract, Intimidation and Discrimination Against Trade Unionists",
    };
    expect(reducer(previousState, removeBookmark(objToBeRemoved))).toEqual({
      bookmarkArray: [
        {
          legislation: "MVA",
          sectionNum: "3 (4.1)",
          partLabel: "Part 1",
          sectionHeading: "Registration, licence and insurance",
        },
      ],
    });
  });
});
