import { View, Text, Button } from "react-native";
import React from "react";

//button is temp until component for legislation is implemented

const LegislationScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Criminal Code of Canada"
        onPress={() => navigation.navigate("CrimCodePartsScreen")}
      />
    </View>
  );
};

export default LegislationScreen;
