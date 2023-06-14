import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// TODO - wire in the actual search function
// TODO - migrate styles to own CSS

const Searchbar = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="search" style={styles.searchIcon} />
      <TextInput
        style={styles.searchbar}
        placeholder="Search for a reference topic"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  searchIcon: {
    backgroundColor: "#fff",
    height: 50,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    padding: 13,
    fontSize: 24,
  },

  searchbar: {
    width: 250,
    height: 50,
    backgroundColor: "#ffffff",
    fontSize: 12,
    textAlign: "left",
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
});

export default Searchbar;
