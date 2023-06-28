import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BookmarkIcon } from "../../Bookmark/BookmarkIcon";
import styles from "../../../Shared/styles";

export default function CrimCodeSubSectionsScreen({ route, navigation }) {
  const { sectionNum, partLabel, sectionHeading, legislation } = route.params;
  const [marked, setMarked] = useState(false); //to change marked status of content

  //TESTING CODE
  let testSectionNum = "320.14(4)";
  //

  //pull state to see if current section exists in bookmarks
  const bookmarkStateId = useSelector(state => state.bookmarks.bookmarkItem);

  console.log(testSectionNum + " " + sectionNum);
  useEffect(() => {
    // compares state array to see if section exists in bookmarks, if it does turn on bookmark icon
    if (
      // bookmarkStateId.some(
      //   e => e.sectionNum == sectionNum && e.legislation == legislation)

      //TESTING CODE
      testSectionNum == sectionNum
    ) {
      setMarked(true);
    } else {
      setMarked(false);
    }
    console.log(marked);
  }, []);
  return (
    <View style={styles.bookmarkScreenFormatting}>
      <Text style={styles.bookmarkTitleRender}>CrimCodeSubSectionsScreen</Text>
      <Text style={styles.bookmarkTitleRender}>{sectionNum}</Text>
      <View>
        <BookmarkIcon
          legislation={legislation}
          sectionNum={sectionNum}
          partLabel={partLabel}
          sectionHeading={sectionHeading}
          marked={marked}
        />
      </View>
    </View>
  );
}
