import { createStackNavigator } from "@react-navigation/stack";

import LegislationScreen from "../../Screens/Legislation/LegislationScreen";
import CrimCodePartsScreen from "../../Screens/Legislation/Criminal Code/CrimCodePartsScreen";
import CrimCodeSubSectionsScreen from "../../Screens/Legislation/Criminal Code/CrimCodeSubSectionsScreen";


//Legislation Stack created to nest stacks for each legislation act eg.(Criminal Code, Motor Vehicle Act)

const LegislationStackNavigator = createStackNavigator();

const LegislationStack = () => {
  return (
    <LegislationStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <LegislationStackNavigator.Screen
        name="LegislationScreen"
        component={LegislationScreen}
      />
      <LegislationStackNavigator.Screen
        name="CrimCodePartsScreen"
        component={CrimCodePartsScreen}
      />
      <LegislationStackNavigator.Screen
        name="CrimCodeSubSectionsScreen"
        component={CrimCodeSubSectionsScreen}
      />
    </LegislationStackNavigator.Navigator>
  );
};

export default LegislationStack;
