import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render, screen, fireEvent } from '@testing-library/react-native';

import BottomTabNavigator from '../src/Shared/Navigation/BottomTabNavigator'

describe('Testing react navigation', () => {
    test('screen contains a button linking to the notifications page', async () => {
      const component = (
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      );
  
      render(component);
      const button = await screen.findByText('More');
  
      expect(button).toBeOnTheScreen();
    });
  
    test('clicking on the button takes you to the notifications screen', async () => {
      const component = (
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      );
  
      render(component);
      const oldScreen = screen.queryByText('HomeScreen');
      const button = await screen.findByText('More');
  
      expect(oldScreen).toBeOnTheScreen();
  
      fireEvent(button, 'press');
      const newScreen = await screen.findByText('SettingScreen');
  
      expect(newScreen).toBeOnTheScreen();
    });
  });