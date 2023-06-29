import { View, Text, Button } from "react-native";
import React from "react";
import Breadcrumb from "../../Shared/Components/header/Breadcrumb";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      {/* Insert Breadcrumb component into the top of all screens */}
      <Breadcrumb />
      {/*  button is added to test navigation, component button will replace this */}
      <Button
        title="Legislation"
        onPress={() => navigation.navigate("LegislationStack")}
      />
    </View>
  );
};

export default HomeScreen;
