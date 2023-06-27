import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { Color } from "../styles";

// TODO - wire in the actual search function
// TODO - migrate styles to own CSS

// Searchbar component implements the search icon, focused and blurred state outline, and changing the keyboard
//    return key to a magnifying glass icon.
const Searchbar = () => {
  // This state is required so that we can change the color of the border when the searchbar is ready for input.
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
    // Because of the dynamic borderColor change on focus, the style here needs to remain inline
      style={{
        ...styles.container,
        borderColor:
          isFocused == true ? Color.inFocus : Color.headingBackground,
      }}
    >
      <FontAwesome name="search" style={styles.searchIcon} />
      <TextInput
        style={{ ...styles.searchbar }}
        placeholder="Search for a reference topic"
        onFocus={() => setIsFocused(true)}
        onSubmitEditing={() => setIsFocused(false)}
        onEndEditing={() => setIsFocused(false)}
        onBlur={() => setIsFocused(false)}
        returnKeyType="search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 7,
    height: 56,
  },

  searchIcon: {
    backgroundColor: Color.searchBody,
    height: 50,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    padding: 13,
    fontSize: 24,
  },

  searchbar: {
    width: 227,
    height: 50,
    backgroundColor: Color.searchBody,
    fontSize: 16,
    textAlign: "left",
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
});

export default Searchbar;
