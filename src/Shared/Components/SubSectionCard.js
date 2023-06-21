import { View, Text } from "react-native";
import React from "react";
import styles from "../styles";
import SubSectionHeader from "./SubSectionHeader";
import SubSectionBody from "./SubSectionBody";
import { FlatList } from "react-native-gesture-handler";

/* 
Header for Subsection 

Fields from database as follows
partLabel = Heading1_Label    Part Number
sectionHeading = Heading2     Name of section
sectionNum = id               Section Number
dbData = object of dbData sent from Subsection Screen
*/

const SubSectionCard = ({ partLabel, sectionNum, sectionHeading, dbData }) => {
  let subSectionArray = dbData.filter((x) => {
    return x.IsMarginalNote == "True";
  });
  console.log(dbData.length);
  console.log(subSectionArray.length);

  return (
    <View style={styles.subSectionCard}>
      <SubSectionHeader
        sectionHeading={sectionHeading}
        sectionNum={sectionNum}
        partLabel={partLabel}
      />
      <FlatList
        data={subSectionArray}
        key={({ item }) => item.SortIndex}
        renderItem={({ item }) => {
          return <SubSectionBody marginalNote={item.Text} />;
        }}
      />
    </View>
  );
};

export default SubSectionCard;
