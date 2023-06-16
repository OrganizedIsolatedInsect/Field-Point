import { View, Text } from "react-native";
import React from "react";

import { LegislationStack } from "../../Shared/Navigation/LegislationStackNavigator";

//button is temp until component for legislation is implemented

const LegislationScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Criminal Code of Canada"
        onPress={() => navigation.navigate("CrimCodeStack")}
      />
    </View>
  );
};

export default LegislationScreen;
