import React, { useState, useEffect } from "react";
import { View } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch } from "react-redux";
import { switchMarks } from "../Functions/Functions";
import { Color } from "../styles";
import { addBookmark, removeBookmark } from "../../Redux/bookmarkSlice";

const BookmarkAction = ({ legislation, docid, marked }) => {
  console.log("inside bookmark action");
  const dispatch = useDispatch();

  function action(legislation, docid, marked) {
    console.log("inside BookmarkAction-action");
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
  }
  action(legislation, docid, marked);
  // return (
  //   <Pressable
  //     onPress={() => {
  //       setMarked(switchMarks(marked));
  //       {
  //         console.log("inside BookmarkAction-return");
  //       }
  //       action(legislation, docid);
  //     }}
  //   >
  //     <View>
  //       <Icon
  //         name={marked ? "bookmark" : "bookmark-o"}
  //         size={30}
  //         style={{ color: Color.primaryText }}
  //       />
  //     </View>
  //   </Pressable>
};

export default BookmarkAction;
