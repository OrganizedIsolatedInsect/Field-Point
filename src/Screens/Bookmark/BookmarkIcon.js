import React, { useState } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { addBookmark, removeBookmark } from "../../Redux/bookmarkSlice";
import Icon from "react-native-vector-icons/FontAwesome";
import { Color } from "../../Shared/styles";

export const BookmarkIcon = ({
  legislation,
  sectionNum,
  partLabel,
  sectionHeading,
  passMarked,
}) => {
  const [marked, setMarked] = useState(passMarked); //to change marked status of content
  const dispatch = useDispatch();

  function switchMarks(marked) {
    return !marked;
  }

  const bookmarkAction = (
    legislation,
    sectionNum,
    partLabel,
    sectionHeading,
    marked
  ) => {
    if (marked === true) {
      dispatch(
        addBookmark({
          legislation: legislation,
          sectionNum: sectionNum,
          partLabel: partLabel,
          sectionHeading: sectionHeading,
        })
      );
    }
    if (marked === false) {
      dispatch(
        removeBookmark({
          legislation: legislation,
          sectionNum: sectionNum,
          partLabel: partLabel,
          sectionHeading: sectionHeading,
        })
      );
    }
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <Icon
        name={marked ? "bookmark" : "bookmark-o"}
        size={30}
        onPress={() => {
          setMarked(switchMarks(marked));
          bookmarkAction(
            legislation,
            sectionNum,
            partLabel,
            sectionHeading,
            marked
          );
        }}
        style={{ color: Color.activeIcon }}
      />
    </View>
  );
};
