import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render, screen, fireEvent } from "@testing-library/react-native";

import AppNavigator from "../src/Shared/Navigation/BottomTabNavigator";

describe("Testing Criminal Code Browse", () => {
  test("Navigate to the Criminal code and check Accordion for Part I", async () => {
    jest.mock("react-native-sqlite-storage", () => ({
      DEBUG: jest.fn,
      enablePromise: jest.fn(),
      openDatabase: (...args) => {
        return {
          transaction: (...args) =>
            Promise.resolve({
              executeSql: (query) => {
                return Promise.resolve([]);
              },
            }),
          cleanDb: () => Promise.resolve(),
          executeSql: (query) => {
            return Promise.resolve([]);
          },
        };
      },
    }));

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