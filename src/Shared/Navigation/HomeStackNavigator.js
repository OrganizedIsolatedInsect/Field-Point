import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../../Screens/Home/HomeScreen";
import LegislationScreen from "../../Screens/Legislation/LegislationScreen";
import CrimCodeSubSectionsScreen from "../../Screens/Legislation/Criminal Code/CrimCodeSubSectionsScreen";

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
      <HomeStackNavigator.Screen
        name="CrimCodeSubSectionsScreen"
        component={CrimCodeSubSectionsScreen}
      />
    </HomeStackNavigator.Navigator>
  );
};

export default HomeStack;
