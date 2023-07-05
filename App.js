import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/Shared/Navigation/BottomTabNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import RNBootSplash from "react-native-bootsplash";
import store from "./src/Redux/store";

// Theme used to implement a global background color throughout the entire app
import { DarkTheme } from "./src/Shared/styles";

// RNBootSplash implemented to show a basic splash screen. It is passed to the onReady prop in
//  the NavigationContainer so that it will hide once the children have loaded. The fade argument
//  causes the splash screen to fade out with a 500ms duration.

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer
          theme={DarkTheme}
          onReady={() => RNBootSplash.hide({ fade: true, duration: 500 })}
        >
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
