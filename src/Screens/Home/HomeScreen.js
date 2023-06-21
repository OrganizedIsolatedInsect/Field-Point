import { View, Text, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchMarks } from "../../Shared/Functions/Functions";
import { Color } from "../../Shared/styles";
import Icon from "react-native-vector-icons/FontAwesome";
import BookmarkAction from "../../Shared/Components/BookmarkAction";

const HomeScreen = () => {
  //FOR TESTING PURPOSES
  const [marked, setMarked] = useState(false); //to change marked status of content

  //pull state to see if current section exists in bookmarks
  const bookmarkStateId = useSelector(state => state.bookmarks.sections);
  const dispatch = useDispatch();

  let legislation = "Crim Code";
  let docid = "425";
  useEffect(() => {
    // compares state array to see if section exists in bookmarks, if it does turn on bookmark icon
    //if (bookmarkStateId.some(e => e.section == provisionID)) {
    console.log("inside HomeScreen-useeffect");
    let a = 1;
    if (a == 1) {
      setMarked(true);
      console.log("use effect true-" + marked);
    } else {
      setMarked(false);
      console.log("use effect false-" + marked);
    }
  }, []); //do not set the flag to marked as the second you call setmarked, then marked changes and useeffect runs again.

  //dispatch add or remove bookmarks based bookmark icon
  //Requires Legislation to differentiate the source of the bookmark

  return (
    <View>
      <Text>HomeScreen</Text>
      {console.log("inside HomeScreen-return")}
      <Pressable>
        <Icon
          name={marked ? "bookmark" : "bookmark-o"}
          size={30}
          onPress={() => {
            try {
              setMarked(switchMarks(marked));
              {
                console.log("inside HomeScreen-onpress");
              }
              BookmarkAction(legislation, docid, marked);
            } catch {}
          }}
          style={{ color: Color.inActiveIcon }}
        />
        <Text style={{ color: Color.inActiveIcon }}>marked: {marked}</Text>
      </Pressable>
    </View>
  );

  //ALL FOR TESTING
};

export default HomeScreen;
