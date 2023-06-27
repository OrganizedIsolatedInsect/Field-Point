import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../styles";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";

import { getDbDataCrimCodeSection } from "../../Screens/Legislation/Criminal Code/CriminalCodeFunctions";
import LegislationSectionsAccordion from "./LegislationSectionsAccordion";
import { AccordionOpenIcon, AccordionCloseIcon } from "./AccordionIcons";

/* 
Component for the accordion to display the Parts heading for the accordion head, opening the accordion will open the sections accordion component which displays the Sections for the part selected

Fields from database as follows, props recieved from CrimCodePartsScreen
headingLabel = Heading1       Heading Name
partLabel = Heading1_Label    Part Number
sortIndex = SortIndex         Index used as key

Accordion instuctions can be found at https://github.com/marouanekadiri/Accordion-Collapse-react-native#readme
 */

const LegislationPartsAccordion = ({ headingLabel, partLabel, sortIndex }) => {
  const [dbDataSection, setDbDataSection] = useState([]); // create array to section heading data from Crim Code Database
  const [accordionArrow, setAccordionArrow] = useState(true);

  //sends partLabel into SQL query in getDbDataCrimCodeSection to get back distinct section data per part
  useEffect(() => {
    getDbDataCrimCodeSection(partLabel, setDbDataSection);
  }, [partLabel]);

  return (
    <View>
      <Collapse
        onToggle={(accordionArrow) => setAccordionArrow(!accordionArrow)}
        key={sortIndex}
      >
        <CollapseHeader>
          <View style={styles.accordionHeader}>
            {accordionArrow == true ? (
              <AccordionCloseIcon />
            ) : (
              <AccordionOpenIcon />
            )}
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
                  sortIndex={x.sortIndex}
                  partLabel={partLabel}
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
