import { createStackNavigator } from "@react-navigation/stack";

import LegislationScreen from "../../Screens/Legislation/LegislationScreen";
import CrimCodePartsScreen from "../../Screens/Legislation/Criminal Code/CrimCodePartsScreen";
import CrimCodeSubSectionsScreen from "../../Screens/Legislation/Criminal Code/CrimCodeSubSectionsScreen";
import MVAScreen from "../../Screens/Legislation/MVA/MVA";

//Legislation Stack created to nest stacks for each legislation act eg.(Criminal Code, Motor Vehicle Act)

const LegislationStackNavigator = createStackNavigator();

const LegislationStack = () => {
  return (
    <LegislationStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <LegislationStackNavigator.Screen
        name="Legislation"
        component={LegislationScreen}
      />
      <LegislationStackNavigator.Screen
        name="Criminal Code of Canada"
        component={CrimCodePartsScreen}
      />
      <LegislationStackNavigator.Screen
        name="CrimCodeSubSectionsScreen"
        component={CrimCodeSubSectionsScreen}
      />
      <LegislationStackNavigator.Screen
        name="Motor Vehicle"
        component={MVAScreen}
      />
    </LegislationStackNavigator.Navigator>
  );
};

export default LegislationStack;
