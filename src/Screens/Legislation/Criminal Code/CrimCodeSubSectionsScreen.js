import { View, Text } from "react-native";
import React from "react";

export default function CrimCodeSubSectionsScreen({
  sectionNum,
  partLabel,
  sectionHeading,
}) {
  return (
    <View>
      <Text>CrimCodeSubSectionsScreen</Text>
      <Text>{sectionNum}</Text>
    </View>
  );
}
