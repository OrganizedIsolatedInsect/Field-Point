/*
  The Bookmark Icon sits on the Breadcrumb component and passes the legislation props to the icon actions.
  The icon is only visible on pages that have Legislation that can be bookmarked although the icon is technically "seen" by all the screens that contain the breadcrumb.
  The icon renders differently depending on whether the legislation is found in the redux.
*/

import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, removeBookmark } from "../../../Redux/bookmarkSlice";
import Icon from "../Icon.js";
import styles from "../../styles";
import { RoutingItems } from "../../../Data/RoutingLookups";

export const BookmarkIcon = ({
  title, //this is the name of the Screen as per the LegislationStackNavigator.
  //This is used as a lookup to obtain the "short version" of the legislation name for output to the device as well as determine which screen the bookmark will return to.
  //This will pass to the redux upon adding bookmark.  eg.  "Criminal Code of Canada"
  sectionNum, //the section number of the specific legislation being passed.   This will pass to the redux upon adding bookmark.  eg. 83.05
  partLabel, //the part of the legislation where the section number sits. This will pass to the redux upon adding bookmark. eg. PART III
  sectionHeading, // the description of the specific legislation.  This will pass to the redux upon adding bookmark. eg. List of Entities
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
