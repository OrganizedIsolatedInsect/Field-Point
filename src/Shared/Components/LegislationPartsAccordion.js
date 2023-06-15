import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../styles";
import Ionicons from "react-native-vector-icons/Ionicons";

import { getDbDataCrimCodeSection } from "../../Screens/Legislation/Criminal Code/CriminalCodeFunctions";
import LegislationSectionsAccordion from "./LegislationSectionsAccordion";
//button created for the parts of legislation, after pushing it will move to the sections portion

/* 
Fields from database as follows
headingLabel = Heading1
partLabel = Heading1_Label
 */

const LegislationPartsAccordion = ({ headingLabel, partLabel }) => {
  const [dbDataSection, setDbDataSection] = useState([]); // create array to section heading data from Crim Code Database

  useEffect(() => {
    getDbDataCrimCodeSection(partLabel, setDbDataSection);
  }, [partLabel]);

  return (
    <View>
      <View style={styles.accordionHeader}>
        <Ionicons
          name="chevron-back-circle"
          style={styles.partsCheveronCircle}
        />
        <View style={styles.headingLabelContainer}>
          <Text style={styles.partsPrimaryText}>
            {/* Temp fix for blank heading1_label for part I */}
            {headingLabel != "" ? headingLabel : "General"}
          </Text>
          <Text style={styles.partsSecondaryText}>{partLabel}</Text>
        </View>
      </View>
      <View>
        {dbDataSection.map((x) => {
          return <LegislationSectionsAccordion sectionHeading={x.Heading2} />;
        })}
      </View>
    </View>
  );
};

export default LegislationPartsAccordion;
