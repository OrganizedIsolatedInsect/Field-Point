import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "../styles";
import Ionicons from "react-native-vector-icons/Ionicons";

const LegislationSectionsAccordion = ({ sectionHeading }) => {
  return (
    <Pressable
      onPress={() => {
        console.log("button");
      }}
    >
      <View style={styles.accordionBody}>
        <View style={styles.sectionsHeaderContainer}>
          <Text style={styles.sectionsPrimaryText}>{sectionHeading}</Text>
        </View>
        <Ionicons name="chevron-forward" style={styles.sectionsCheveron} />
      </View>
    </Pressable>
  );
};

export default LegislationSectionsAccordion;
