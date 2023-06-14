import { createStackNavigator } from "@react-navigation/stack";

import { CrimCodeStack } from "./CrimCodeStackNavigator";
import LegislationScreen from "../../Screens/Legislation/LegislationScreen";

//Legislation Stack created to nest stacks for each legislation act eg.(Criminal Code, Motor Vehicle Act)

const LegislationStackNavigator = createStackNavigator()

const LegislationStack = () =>{
    return(
        <LegislationStackNavigator.Navigator>
            <LegislationStackNavigator.Screen name="LegislationScreen" component={LegislationScreen}/>
            <LegislationStackNavigator.Screen name="CrimCodeStack" component={CrimCodeStack}/>
        </LegislationStackNavigator.Navigator>
    )
}

export {LegislationStack}