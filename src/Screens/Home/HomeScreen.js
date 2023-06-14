import { View, Text, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchMarks } from "../../Shared/Functions/Functions";
import { Color } from "../../Shared/styles";
import Icon from "react-native-vector-icons/MaterialIcons";

const HomeScreen = () => {
  //FOR TESTING PURPOSES
  const [marked, setMarked] = useState(false); //to change marked status of content

  //pull state to see if current section exists in bookmarks
  const bookmarkStateId = useSelector(state => state.bookmarks.sections);

  useEffect(() => {
    // compares state array to see if section exists in bookmarks, if it does turn on bookmark icon
    if (bookmarkStateId.some(e => e.section == provisionID)) {
      setMarked(switchMarks(false));
    } else {
      setMarked(switchMarks(true));
    }
  }, [marked]);
  console.log(marked);
  return (
    <View>
      <Text>HomeScreen</Text>
      <Pressable>
        <Icon
          name={marked ? "bookmark" : "bookmark-outline"}
          size={30}
          onPress={() => {
            setMarked(switchMarks(marked));
            //dispatchAction();
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
