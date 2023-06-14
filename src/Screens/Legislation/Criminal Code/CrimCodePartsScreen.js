import { View, Text } from "react-native";
import React from "react";
import LegislationPartsButton from "../../../Shared/Components/LegislationPartsButton";
import styles, { Color } from "../../../Shared/styles";

const CrimCodePartsScreen = () => {
  return (
    <View>
      <LegislationPartsButton />
      <LegislationPartsButton />
    </View>
  );
};

export default CrimCodePartsScreen;
