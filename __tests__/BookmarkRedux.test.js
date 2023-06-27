import React from "react";
import { Provider, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { configureStore } from "@reduxjs/toolkit";
import bookmarkSlice from "../src/Redux/bookmarkSlice.js";

describe("Bookmark Redux test list of bookmark items", () => {
  test("should execute with a store of 7 items", () => {
    const initialState = {
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
        {
          legislation: "CrimCode",
          sectionNum: "430(3)(b)",
          partLabel: "PART XI",
          sectionHeading: "Mischief",
        },
        {
          legislation: "MVA",
          sectionNum: "3 (10)(c)(Continued)",
          partLabel: "Part 1",
          sectionHeading: "Registration, licence and insurance",
        },
        {
          legislation: "CrimCode",
          sectionNum: "320.14(4)",
          partLabel: "PART VIII.1",
          sectionHeading: "Offences and Punishment",
        },
        {
          legislation: "MVA",
          sectionNum: "126",
          partLabel: "Part 3",
          sectionHeading: "Traffic control signals",
        },
        {
          legislation: "CrimCode",
          sectionNum: "503(3)(b)(ii)",
          partLabel: "PART XVI",
          sectionHeading: "Appearance of Accused before Justice",
        },
      ],
    };

    let store = configureStore({
      reducer: { bookmarks: bookmarkSlice },
      initialState: { initialState },
    });

    // const component = (
    //   <Provider store={store}>
    //     <NavigationContainer>
    //       <BookmarkScreen />
    //     </NavigationContainer>
    //   </Provider>
    // );

    const bookmarks = store.getState().bookmarks;
    expect(bookmarks.bookmarkArray.length).toEqual(7);

    // render(component);
    // const bookmarkElements = screen.getAllByText(/legislation/i);

    // expect(bookmarkElements.length).toEqual(7);
  });
});
