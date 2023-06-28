import { View, Text } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View>
      {/*  button is added to test navigation, component button will replace this */}
      <Button
        title="Legislation"
        onPress={() => navigation.navigate("LegislationStack")}
      />
    </View>
  );
};

export default HomeScreen;
