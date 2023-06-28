import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, removeBookmark } from "../../Redux/bookmarkSlice";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRoute } from "@react-navigation/native";
import { Color } from "../../Shared/styles";
import { RoutingItems } from "../../Data/RoutingLookups"; //to determine visibility of icon on screen

export const BookmarkIcon = ({
  legislation,
  sectionNum,
  partLabel,
  sectionHeading,
}) => {
  const [marked, setMarked] = useState(false); //to change marked status of bookmark

  const bookmarkStateId = useSelector(state => state.bookmarks.bookmarkArray);
  const dispatch = useDispatch();

  function switchMarks() {
    setMarked(!marked);
    return marked;
  }

  //Bookmark specific effect action
  useEffect(() => {
    // compares state array to see if section exists in bookmarks, if it does turn on bookmark icon
    if (
      bookmarkStateId.some(
        e => e.sectionNum == sectionNum && e.legislation == legislation
      )
    ) {
      setMarked(true);
    } else {
      setMarked(false);
    }
  }, [legislation, sectionNum, partLabel, sectionHeading]);

  function bookmarkAction(legislation, sectionNum, partLabel, sectionHeading) {
    if (marked === false) {
      dispatch(
        addBookmark({
          legislation: legislation,
          sectionNum: sectionNum,
          partLabel: partLabel,
          sectionHeading: sectionHeading,
        })
      );
    } else {
      dispatch(
        removeBookmark({
          legislation: legislation,
          sectionNum: sectionNum,
          partLabel: partLabel,
          sectionHeading: sectionHeading,
        })
      );
    }
  }

  //The icon only shows up visible on screens that have been identified in the valid routes.
  return (
    <View style={{ marginLeft: "auto" }}>
      <View>
        <Icon
          name={marked ? "bookmark" : "bookmark-o"}
          size={30}
          onPress={() => {
            bookmarkAction(legislation, sectionNum, partLabel, sectionHeading);
            switchMarks();
          }}
          style={{ color: Color.background, right: 0 }}
        />
      </View>
    </View>
  );
};
