import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../../Screens/Home/HomeScreen";
import LegislationScreen from "../../Screens/Legislation/LegislationScreen";
import MVA from "../../Screens/MVA/MVA"
import Policy from "../../Screens/Policy/Policy"
import Resources from "../../Screens/Resources/Resources"
import CCC from "../../Screens/CCC/CCC"


// Create home stack to move to different parts of the app (eg. Legislation, Policy etc..)

const HomeStackNavigator = createStackNavigator();

const HomeStack = () => {
  return (
    <HomeStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <HomeStackNavigator.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStackNavigator.Screen
        name="LegislationScreen"
        component={LegislationScreen}
      />
      <HomeStackNavigator.Screen name="MVAScreen" component={MVA} />
      <HomeStackNavigator.Screen name="PolicyScreen" component={Policy} />
      <HomeStackNavigator.Screen name="ResourcesScreen" component={Resources} />
      <HomeStackNavigator.Screen name="CCCScreen" component={CCC} />
    </HomeStackNavigator.Navigator>
  );
};

export default HomeStack;
