import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render, screen, fireEvent } from "@testing-library/react-native";

import AppNavigator from "../Shared/Navigation/BottomTabNavigator";

//Find findByText is case sensitive and looks for the title of the component in the Code, not what is on the screen

describe("Testing react navigation", () => {
  test("clicking on the bookmarks button takes you to the bookmarks screen", async () => {
    const component = (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );

    render(component);
    const homeScreen = await screen.findByText("Legislation");
    const bookmarkButton = await screen.findByText("BOOKMARKS");

    expect(bookmarkButton).not.toBeNull();
    expect(homeScreen).not.toBeNull();

    fireEvent(bookmarkButton, "press");
    const bookmarkScreen = await screen.findByText("BookmarkScreen");

    expect(bookmarkScreen).not.toBeNull();
  });

  test("clicking more button takes you to the settings screen", async () => {
    const component = (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );

    render(component);
    const homeScreen = await screen.queryByText("Legislation");
    const moreButton = await screen.findByText("MORE");

    expect(moreButton).not.toBeNull();
    expect(homeScreen).not.toBeNull();

    fireEvent(moreButton, "press");
    const settingsScreen = screen.queryByText("SettingScreen");

    expect(settingsScreen).not.toBeNull();
  });

  test("clicking to bookmark button then returning to home screen", async () => {
    const component = (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );

    render(component);
    const homeScreen = await screen.queryByText("Legislation");
    const bookmarkButton = await screen.findByText("BOOKMARKS");
    const homeButton = await screen.findByText("HOME");

    expect(bookmarkButton).not.toBeNull();
    expect(homeScreen).not.toBeNull();

    fireEvent(bookmarkButton, "press");
    const bookmarkScreen = await screen.findByText("BookmarkScreen");

    expect(bookmarkScreen).not.toBeNull();

    fireEvent(homeButton, "press");
    expect(homeScreen).not.toBeNull();
  });

  test("clicking to bookmark button to go to bookmark screen then clicking more to settings screen", async () => {
    const component = (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );

    render(component);
    const homeScreen = await screen.queryByText("Legislation");
    const bookmarkButton = await screen.findByText("BOOKMARKS");
    const homeButton = await screen.findByText("HOME");
    const moreButton = await screen.findByText("MORE");

    expect(bookmarkButton).not.toBeNull();
    expect(homeScreen).not.toBeNull();

    fireEvent(bookmarkButton, "press");
    const bookmarkScreen = await screen.findByText("BookmarkScreen");

    expect(bookmarkScreen).not.toBeNull();

    fireEvent(moreButton, "press");
    const settingsScreen = screen.queryByText("SettingScreen");

    expect(settingsScreen).not.toBeNull();
  });

  test("clicking on the LegislationButton brings your to the Legislation screen", async () => {
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
