import React from "react";
import "react-native";
import "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { render, screen, fireEvent } from "@testing-library/react-native";

import AppNavigator from "../src/Shared/Navigation/BottomTabNavigator";
import App from "../App";
import SQLite from "react-native-sqlite-storage";

SQLite.enablePromise(true);
jest.mock("react-native-sqlite-storage");
jest.mock("../src/Screens/Legislation/Criminal Code/CriminalCodeFunctions");
jest.mock("accordion-collapse-react-native");

describe("Testing Criminal Code Browse", () => {
  test("Navigate to the Criminal code and check Accordion for Part I", async () => {
    const component = <App />;

    render(component);
    const homeScreen = await screen.findByText("Legislation");
    const LegislationButton = await screen.findByText("Legislation");

    expect(LegislationButton).not.toBeNull();
    expect(homeScreen).not.toBeNull();

    fireEvent(LegislationButton, "press");
    const LegislationScreen = await screen.findByText(
      "Criminal Code of Canada"
    );
    const CrimCodeButton = await screen.findByText("Criminal Code of Canada");

    expect(LegislationScreen).not.toBeNull();
    expect(CrimCodeButton).not.toBeNull();

    fireEvent(CrimCodeButton, "press");

    const Part = await screen.findByTestId("accordionHeader");
  });
});
