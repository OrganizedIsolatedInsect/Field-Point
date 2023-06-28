import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "../styles";
import { AccordionSectionIcon } from "./AccordionIcons";
import { useNavigation } from "@react-navigation/native";

/* 
Body component for Accordion, used to display the sections headings of the Part selected

Fields from database as follows, props are received from LegislationPartsAccordion component
sectionHeading = Heading2     Name of section
sectionNum = id               Section Number
partLabel = Heading1_Label    Part Number
 */

const LegislationSectionsAccordion = ({
  sectionHeading,
  sectionNum,
  partLabel,
}) => {
  //use navigation hook to navigate to SubSection Screen sending the section heading name, section number and part label as a param via the navigation route
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => {
        /* 
        pass params thought the navigation route
        */
        navigation.navigate("CrimCodeSubSectionsScreen", {
          sectionHeading: sectionHeading,
          sectionNum: sectionNum,
          partLabel: partLabel,
        });
      }}
    >
      <View style={styles.accordionBody}>
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
