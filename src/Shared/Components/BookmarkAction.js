import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { addBookmark, removeBookmark } from "./src/Redux/bookmarkSlice";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useDispatch } from "react-redux";
import { switchMarks } from "../Functions/Functions";
import { Color } from "../styles";

const BookmarkAction = (legislation, docid) => {
  const [marked, setMarked] = useState(false); // Preps icon for state change
  const dispatch = useDispatch();

  useEffect(() => {
    action(legislation, docid);
  });

  const action = (legislation, docid) => {
    if (marked === true) {
      dispatch(
        addBookmark({
          legislation: legislation,
          docid: docid,
        })
      );
    }
    if (marked === false) {
      dispatch(
        removeBookmark({
          legislation: legislation,
          docid: docid,
        })
      );
    }
  };

  return (
    <Pressable
      onPress={() => {
        setMarked(switchMarks(marked));
      }}
    >
      <View>
        <Icon
          name={marked ? "bookmark" : "bookmark-outline"}
          size={30}
          style={{ color: Color.primaryText }}
        />
      </View>
    </Pressable>
  );
};

export default BookmarkAction;
