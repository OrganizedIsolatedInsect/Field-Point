import React, { useState } from "react";
import { TextInput, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import styles, { Color } from "../../styles";

// TODO - wire in the actual search function

// Searchbar component implements the search icon, focused and blurred state outline, and changing the keyboard
//    return key to a magnifying glass icon.
const Searchbar = () => {
  // This state is required so that we can change the color of the border when the searchbar is ready for input.
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
    // Because of the dynamic borderColor change on focus, the style here needs to remain inline
      style={{
        ...styles.searchContainer,
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

export default Searchbar;
