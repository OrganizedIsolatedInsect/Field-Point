import { View, Text, Button } from "react-native";
import React from "react";
import Breadcrumb from "../../Shared/Components/header/Breadcrumb";

//button is temp until component for legislation is implemented

const LegislationScreen = ({ navigation }) => {
  return (
    <View>
      {/* Insert Breadcrumb component into the top of all screens */}
      <Breadcrumb />
      <Button
        title="Criminal Code of Canada"
        onPress={() => navigation.navigate("Criminal Code of Canada")}
      />
    </View>
  );
};

export default LegislationScreen;
