import { View, Text, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BookmarkIcon } from "../Bookmark/BookmarkIcon";

import styles, { Color } from "../../Shared/styles";

const HomeScreen = ({ navigation }) => {
  //FOR TESTING PURPOSES
  const [marked, setMarked] = useState(true); //to change marked status of content

  //pull state to see if current section exists in bookmarks
  const bookmarkStateId = useSelector(state => state.bookmarks.bookmarkItem);

  //FOR TESTING
  console.log(bookmarkStateId);
  let legislation = "Crim Code";
  let docid = "425";

  useEffect(() => {
    // compares state array to see if section exists in bookmarks, if it does turn on bookmark icon
    if (
      bookmarkStateId.some(
        e => e.docid == docid && e.legislation == legislation
      )
    ) {
      setMarked(true);
    } else {
      setMarked(false);
    }
  }, []); //do not set the flag to marked as the second you call setmarked, then marked changes and useeffect runs again.

  //Requires Legislation to differentiate the source of the bookmark

  //for testing purposes
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
