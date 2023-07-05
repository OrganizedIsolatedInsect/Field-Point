import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, removeBookmark } from "../../Redux/bookmarkSlice";
//import Icon from "react-native-vector-icons/FontAwesome";
import Icon from "../../Shared/Components/Icon.js";
import styles, { Color } from "../../Shared/styles";
import { RoutingItems } from "../../Data/RoutingLookups";

export const BookmarkIcon = ({
  title,
  sectionNum,
  partLabel,
  sectionHeading,
}) => {
  const [marked, setMarked] = useState(false); //to change marked state of bookmark
  const bookmarkStateId = useSelector(state => state.bookmarks.bookmarkArray); //get list of bookmarks
  const dispatch = useDispatch();

  //switch the mark state to opposite what it was.
  function switchMarks() {
    setMarked(!marked);
    return marked;
  }

  //if the bookmarks exists in redux, then switch the mark upon any change of all of the elements below.
  useEffect(() => {
    // compares state array to see if section exists in bookmarks, if it does turn on bookmark icon
    bookmarkStateId.find(e => e.sectionNum === sectionNum && e.title === title)
      ? setMarked(true)
      : setMarked(false);
  }, [title, sectionNum, partLabel, sectionHeading]);

  // //adds or removes bookmark depending on the state of marked.
  function bookmarkAction(title, sectionNum, partLabel, sectionHeading) {
    const legislation = RoutingItems.find(e => e.title === title);

    if (marked === false) {
      dispatch(
        addBookmark({
          title: title,
          sectionNum: sectionNum,
          partLabel: partLabel,
          sectionHeading: sectionHeading,
          legislation: legislation.legislation,
        })
      );
    } else {
      dispatch(
        removeBookmark({
          title: title,
          sectionNum: sectionNum,
          partLabel: partLabel,
          sectionHeading: sectionHeading,
          legislation: legislation.legislation,
        })
      );
    }
  }

  //the redux action has to come before the bookmark action, which is counterintuitive but necessary for the proper action order
  //the Icon here cannot use the developer created icon component because of the  placement of the onPress function.
  return (
    <View>
      <Icon
        iconStyle="FontAwesome"
        iconName={marked ? "bookmark" : "bookmark-o"}
        onPress={() => {
          bookmarkAction(title, sectionNum, partLabel, sectionHeading, marked);
          switchMarks();
        }}
        style={styles.bookmarkIcon}
      />
    </View>
  );
};
