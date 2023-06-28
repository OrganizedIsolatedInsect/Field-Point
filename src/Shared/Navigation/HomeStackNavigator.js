import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../../Screens/Home/HomeScreen";
import LegislationScreen from "../../Screens/Legislation/LegislationScreen";

// Create home stack to move to different parts of the app (eg. Legislation, Policy etc..)

const HomeStackNavigator = createStackNavigator();

const HomeStack = () => {
  return (
    <HomeStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <HomeStackNavigator.Screen name="Home" component={HomeScreen} />
      <HomeStackNavigator.Screen
        name="Legislation"
        component={LegislationScreen}
      />
    </HomeStackNavigator.Navigator>
  );
};

export default HomeStack;
