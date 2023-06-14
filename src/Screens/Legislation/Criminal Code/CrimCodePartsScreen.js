import { View, Text } from "react-native";
import React from "react";
import LegislationPartsButton from "../../../Shared/Components/LegislationPartsButton";
import styles, { Color } from "../../../Shared/styles";

//screen to house top level of Criminal Code and display all the parts of the legislation
//parts are seperated by the component LegislationPartsButton, pressing will lead to sections of Crim Code

const CrimCodePartsScreen = () => {
  return (
    <View>
      <LegislationPartsButton />
      <LegislationPartsButton />
    </View>
  );
};

export default CrimCodePartsScreen;
