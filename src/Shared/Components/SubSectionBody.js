import { View, Text } from "react-native";
import React from "react";
import styles from "../styles";

/* 
Body to house the text of the subsections based on the marginal note of the subsection

Fields from database as follows, props receieved from SubSectionCard
marginalNote = Text                     Text of heading where isMarginalNote = True
bookmarkGroup = BookmarkGroup           Name of bookmark grouping
subSectionData = subSectionTextArray    sent as prop from SubSectionCard, houses text data filtered by sectionHeading
*/

const SubSectionBody = ({ marginalNote, bookmarkGroup, subSectionData }) => {
  //Array to filter out subSectionData by bookmark group
  const filtedSubSectionTextArray = subSectionData.filter((x) => {
    return x.BookmarkGroup == bookmarkGroup;
  });

  return (
    <View style={styles.subSectionBody}>
      <Text style={styles.subSectionBodyHeaderText}>{marginalNote}</Text>
      {filtedSubSectionTextArray.map((x) => {
        /* 
        Indent levels are used to control the spacing of the text, base on if its a paragraph,subparagraph or sub subparagraph
        */
        if (x.IndentLevel === "1") {
          return (
            <View style={styles.subSectionBodyLevel1} key={x.SortIndex}>
              <Text style={styles.subSectionBodyText}>{x.Text}</Text>
            </View>
          );
        }
        if (x.IndentLevel === "2") {
          return (
            <View style={styles.subSectionBodyLevel2} key={x.SortIndex}>
              <Text style={styles.subSectionBodyText}>{x.Text}</Text>
            </View>
          );
        }
        if (x.IndentLevel === "3") {
          return (
            <View style={styles.subSectionBodyLevel3} key={x.SortIndex}>
              <Text style={styles.subSectionBodyText}>{x.Text}</Text>
            </View>
          );
        }
      })}
    </View>
  );
};

export default SubSectionBody;
