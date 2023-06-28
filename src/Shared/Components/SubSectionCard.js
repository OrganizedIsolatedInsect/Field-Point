import { View, Text } from "react-native";
import React from "react";
import styles from "../styles";
import SubSectionHeader from "./SubSectionHeader";
import SubSectionBody from "./SubSectionBody";
import { FlatList } from "react-native-gesture-handler";

/* 
Component to house the SubSection Header and SubSection Body components based on the selected Section 

Fields from database as follows, props receieved from CrimCodeSubSectionsScreen
partLabel = Heading1_Label    Part Number
sectionHeading = Heading2     Name of section
sectionNum = id               Section Number
dbData = object of dbData sent from Subsection Screen
*/

const SubSectionCard = ({ partLabel, sectionNum, sectionHeading, dbData }) => {
  // Array created for the marginal note heading for the subSection component, fitered so only marginal notes are shown for the section
  let subSectionMarginalNoteArray = dbData.filter((x) => {
    return x.IsMarginalNote == "True" && x.Heading2 == sectionHeading;
  });

  //Array created to pass the subsection text data to the subSection component, filtered so no marginal notes are shown for the section
  let subSectionTextArray = dbData.filter((x) => {
    return x.IsMarginalNote == "False" && x.Heading2 == sectionHeading;
  });

  return (
    <View style={styles.subSectionCard}>
      <SubSectionHeader
        sectionHeading={sectionHeading}
        sectionNum={sectionNum}
        partLabel={partLabel}
      />
      <FlatList
        data={subSectionMarginalNoteArray}
        key={({ item }) => item.SortIndex}
        renderItem={({ item }) => {
          return (
            <SubSectionBody
              marginalNote={item.Text}
              subSectionData={subSectionTextArray}
              bookmarkGroup={item.BookmarkGroup}
            />
          );
        }}
      />
    </View>
  );
};

export default SubSectionCard;
