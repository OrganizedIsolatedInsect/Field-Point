import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "../styles";
import { AccordionSectionIcon } from "./AccordionIcons";
import { useNavigation } from "@react-navigation/native";

/* 
Fields from database as follows, props are received from LegislationPartsAccordion component
sectionHeading = Heading2     Name of section
sectionNum = id               Section Number
sortIndex = SortIndex         Index used as key
 */

const LegislationSectionsAccordion = ({
  sectionHeading,
  sectionNum,
  sortIndex,
  partLabel,
}) => {
  //use navigation hook to navigate to SubSction Screen sending the section heading name, section number and part label as a param via the navigation route
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("CrimCodeSubSectionsScreen", {
          sectionHeading: sectionHeading,
          sectionNum: sectionNum,
          partLabel: partLabel,
        });
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
