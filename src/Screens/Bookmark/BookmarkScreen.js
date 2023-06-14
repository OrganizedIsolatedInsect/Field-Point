//https://reactnative.dev/docs/asyncstorage

import React from "react";
import { View, Text, FlatList } from "react-native";
import styles, { Color } from "../../Shared/styles";
import { AsyncStorage } from "react-native";

const BookmarkScreen = () => {
  const getData = async () => {
    try {
      const value = JSON.parse(await AsyncStorage.getItem("docid"));
      if (value !== null) {
        // We have data!!
        console.log(AsyncStorage);
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
      await AsyncStorage.setItem("docid", "this is an id");
      console.log("Bookmarks is empty");
    }
  };

  return (
    <View style={styles.bookmarkScreenFormatting}>
      <Text>BookmarkScreen</Text>
      <FlatList
        data={getData}
        renderItem={getData.docid}
        keyExtractor={getData.docid}
      ></FlatList>
    </View>
  );
};

export default BookmarkScreen;
