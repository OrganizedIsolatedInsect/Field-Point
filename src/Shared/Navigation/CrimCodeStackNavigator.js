import { createStackNavigator } from "@react-navigation/stack";

import CrimCodePartsScreen from "../../Screens/Legislation/Criminal Code/CrimCodePartsScreen";

// Create Stack to go though Criminal Code screens. Order should be Criminal Code Parts --> Criminal Code Section --> Criminal Code Content.

const CrimCodeNavigator = createStackNavigator()

const CrimCodeStack = () => {
    return(
    <CrimCodeNavigator.Navigator>
        <CrimCodeNavigator.Screen name="CrimCodeParts" component={CrimCodePartsScreen}/>
    </CrimCodeNavigator.Navigator>
    )
   

}


export {CrimCodeStack}