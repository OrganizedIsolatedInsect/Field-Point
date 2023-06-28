import React from "react";
import "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { render, screen, fireEvent } from "@testing-library/react-native";

import AppNavigator from "../src/Shared/Navigation/BottomTabNavigator";
import App from "../App";
import SQLite from "react-native-sqlite-storage";

SQLite.enablePromise(true);
jest.mock("react-native-sqlite-storage");

describe("Testing Criminal Code Browse", () => {
  test("Navigate to the Criminal code and check Accordion for Part I", async () => {
    const component = (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );

    render(component);
    const homeScreen = await screen.findByText("Legislation");
    const LegislationButton = await screen.findByText("Legislation");

    expect(LegislationButton).not.toBeNull();
    expect(homeScreen).not.toBeNull();

    fireEvent(LegislationButton, "press");
    const LegislationScreen = await screen.findByText(
      "Criminal Code of Canada"
    );

    expect(LegislationScreen).not.toBeNull();
  });
});
