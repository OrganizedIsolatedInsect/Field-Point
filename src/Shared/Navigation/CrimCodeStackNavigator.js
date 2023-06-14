import { createStackNavigator } from "@react-navigation/stack";

import CrimCodePartsScreen from "../../Screens/Legislation/Criminal Code/CrimCodePartsScreen";
import CrimCodeSubSectionsScreen from "../../Screens/Legislation/Criminal Code/CrimCodeSubSectionsScreen";

// Create Stack to go though Criminal Code screens. Order should be Criminal Code Parts --> Criminal Code Section --> Criminal Code Content.

const CrimCodeNavigator = createStackNavigator();

const CrimCodeStack = () => {
  return (
    <CrimCodeNavigator.Navigator>
      <CrimCodeNavigator.Screen
        name="CrimCodeParts"
        component={CrimCodePartsScreen}
      />
      <CrimCodeNavigator.Screen
        name="CrimCodeSubSections"
        component={CrimCodeSubSectionsScreen}
      />
    </CrimCodeNavigator.Navigator>
  );
};

export { CrimCodeStack };
