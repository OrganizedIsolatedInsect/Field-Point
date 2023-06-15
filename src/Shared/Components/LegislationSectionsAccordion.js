import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "../styles";
import { AccordionSectionIcon } from "./AccordionSectionIcon";

/* 
Fields from database as follows
sectionHeading = Heading2     Name of section
sectionNum = id               Section Number
sortIndex = SortIndex         Index used as key
 */

const LegislationSectionsAccordion = ({
  sectionHeading,
  sectionNum,
  sortIndex,
}) => {
  return (
    <Pressable
      onPress={() => {
        console.log("button");
      }}
    >
      <View style={styles.accordionBody} key={sortIndex}>
        <View style={styles.sectionsHeaderContainer}>
          <View style={styles.sectionsNum}>
            <Text style={styles.sectionsPrimaryText}>{sectionNum}</Text>
          </View>
          <View>
            <Text style={styles.sectionsPrimaryText}>{sectionHeading}</Text>
          </View>
        </View>
        <AccordionSectionIcon />
      </View>
    </Pressable>
  );
};

export default LegislationSectionsAccordion;
