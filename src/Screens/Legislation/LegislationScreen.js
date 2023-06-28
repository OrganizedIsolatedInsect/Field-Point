import { View, Text, Button } from "react-native";
import React from "react";
import Breadcrumb from "../../Shared/Components/Breadcrumb";

const LegislationScreen = () => {
  return (
    <View>
      {/* Insert Breadcrumb component into the top of all screens */}
      <Breadcrumb />
      <Button title="Criminal Code of Canada" />
    </View>
  );
};

export default LegislationScreen;
