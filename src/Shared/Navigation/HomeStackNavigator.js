import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../../Screens/Home/HomeScreen";
import LegislationStack from "./LegislationStackNavigator";
import PolicyScreen from "../../Screens/Policy/PolicyScreen";
import ResourcesScreen from "../../Screens/Resources/ResourcesScreen";

// Create home stack to move to different parts of the app (eg. Legislation, Policy etc..)

const HomeStackNavigator = createStackNavigator();

const HomeStack = () => {
  return (
    <HomeStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <HomeStackNavigator.Screen name="Home" component={HomeScreen} />
      <HomeStackNavigator.Screen
        name="LegislationStack"
        component={LegislationStack}
      />
      <HomeStackNavigator.Screen name="Policy" component={PolicyScreen} />
      <HomeStackNavigator.Screen name="Resources" component={ResourcesScreen} />
    </HomeStackNavigator.Navigator>
  );
};

export default HomeStack;
