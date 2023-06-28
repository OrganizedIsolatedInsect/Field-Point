import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, removeBookmark } from "../../Redux/bookmarkSlice";
import Icon from "react-native-vector-icons/FontAwesome";
import { Color } from "../../Shared/styles";

export const BookmarkIcon = ({
  legislation,
  sectionNum,
  partLabel,
  sectionHeading,
}) => {
  const [marked, setMarked] = useState(false); //to change marked status of bookmark

  const bookmarkStateId = useSelector(state => state.bookmarks.bookmarkArray);

  console.log(bookmarkStateId);
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
      console.log("bookmark exists");
      setMarked(true);
    } else {
      console.log("bookmark does not exists");
      setMarked(false);
    }
  }, [legislation, sectionNum, partLabel, sectionHeading]);

  //TEST FUNCTION
  function printtoConsole() {
    console.log(legislation, sectionNum, sectionHeading, partLabel, marked);
  }

  function bookmarkAction(legislation, sectionNum, partLabel, sectionHeading) {
    if (marked === false) {
      console.log("adding");
      dispatch(
        addBookmark({
          legislation: legislation,
          sectionNum: sectionNum,
          partLabel: partLabel,
          sectionHeading: sectionHeading,
        })
      );
    } else {
      console.log("removing");
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
  console.log("before return" + marked);
  return (
    <View style={{ marginLeft: "auto" }}>
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
  );
};
