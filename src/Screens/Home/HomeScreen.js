import { View, Text, Button } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      {/*  button is added to test navigation, component button will replace this */}
      <Button
        title="Legislation"
        onPress={() => navigation.navigate("LegislationScreen")}
      />
    </View>
  );
};

export default HomeScreen;
