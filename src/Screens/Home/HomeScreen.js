import { View, Text, Button } from "react-native";
import React, { useState } from "react";

const HomeScreen = ({ navigation }) => {
  const [tap, setTap] = useState(0);

  const increase = (tap) => {
    setTap(tap + 1);
    console.log(tap);
  };

  return (
    <View>
      {/*  button is added to test navigation, component button will replace this */}
      <Button
        title="Legislation"
        testID="LegislationButton"
        onPress={() => navigation.navigate("LegislationStack")}
      />
      <Button
        title="Tap"
        testID="TapButton"
        onPress={() => {
          increase(tap);
        }}
      />
      <View>
        <Text accessibilityLabel="Tap Amount">{tap}</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
