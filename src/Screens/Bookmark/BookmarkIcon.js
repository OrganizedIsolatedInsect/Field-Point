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

  // //adds or removes bookmark depending on the state of marked.
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

  //the redux action has to come before the bookmark action, which is counterintuitive but necessary for the
  return (
    <View style={{ marginLeft: "auto" }}>
      <View>
        <Icon
          name={marked ? "bookmark" : "bookmark-o"}
          size={30}
          onPress={() => {
            bookmarkAction(
              legislation,
              sectionNum,
              partLabel,
              sectionHeading,
              marked
            );
            switchMarks();
          }}
          style={{ color: Color.background, right: 5 }}
        />
      </View>
    </View>
  );
};
