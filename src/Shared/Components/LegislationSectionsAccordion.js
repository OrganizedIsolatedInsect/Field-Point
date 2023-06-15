import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "../styles";
import Ionicons from "react-native-vector-icons/Ionicons";

/* 
Fields from database as follows
sectionHeading = Heading2
sectionNum = id
 */
const LegislationSectionsAccordion = ({ sectionHeading, sectionNum }) => {
  return (
    <Pressable
      onPress={() => {
        console.log("button");
      }}
    >
      <View style={styles.accordionBody}>
        <View style={styles.sectionsHeaderContainer}>
          <View>
            <Text style={[styles.sectionsNum, styles.sectionsPrimaryText]}>
              {sectionNum}
            </Text>
          </View>
          <View>
            <Text style={[styles.sectionsHeading, styles.sectionsPrimaryText]}>
              {sectionHeading}
            </Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" style={styles.sectionsCheveron} />
      </View>
    </Pressable>
  );
};

export default LegislationSectionsAccordion;
