import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";

import { getDbDataCrimCodeSection } from "../../Screens/Legislation/Criminal Code/CriminalCodeFunctions";
import LegislationSectionsAccordion from "./LegislationSectionsAccordion";

/* 
Fields from database as follows
headingLabel = Heading1
partLabel = Heading1_Label

Accordion instuctions can be found at https://github.com/marouanekadiri/Accordion-Collapse-react-native#readme
 */

const LegislationPartsAccordion = ({ headingLabel, partLabel }) => {
  const [dbDataSection, setDbDataSection] = useState([]); // create array to section heading data from Crim Code Database

  /* 
 sends partLabel into SQL query in getDbDataCrimCodeSection to get back distinct section data per part
 */

  useEffect(() => {
    getDbDataCrimCodeSection(partLabel, setDbDataSection);
  }, [partLabel]);

  return (
    <View>
      <Collapse>
        <CollapseHeader>
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
        </CollapseHeader>
        <CollapseBody>
          <View>
            {dbDataSection.map((x) => {
              return (
                <LegislationSectionsAccordion
                  sectionHeading={x.Heading2}
                  sectionNum={x.id}
                />
              );
            })}
          </View>
        </CollapseBody>
      </Collapse>
    </View>
  );
};

export default LegislationPartsAccordion;
