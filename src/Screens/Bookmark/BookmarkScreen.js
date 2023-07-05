/* 
  Bookmark Screen displays the bookmarks selected by client.
  Source from Redux store; 
*/

import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import styles from "../../Shared/styles";
import { useSelector } from "react-redux";
import Icon from "../../Shared/Components/Icon.js";
import Breadcrumb from "../../Shared/Components/header/Breadcrumb";
import { BookmarkCard } from "./BookmarkCard";

const BookmarkScreen = () => {
  const bookmarks = useSelector(state => state.bookmarks); //get bookmarks array

  const renderBookmarkItem = ({ item }) => {
    return <BookmarkCard item={item} />;
  };

  /*Output Section*/

  if (bookmarks.bookmarkArray.length === 0) {
    return (
      <View>
        <Breadcrumb />
        <View style={[styles.bookmarkScreenFormatting, styles.centerOnScreen]}>
          <Icon
            iconStyle="Ionicons"
            iconName="bookmarks-sharp"
            style={styles.bookmarkIconLarge}
          />
          <Text style={styles.bookmarkNoneTitleRender}>No Bookmarks Yet</Text>
          <View style={styles.bookmarkNoneLabelRender}>
            <Text
              style={[styles.bookmarkTextRender, styles.bookmarkNoneBoxRender]}
            >
              Keep track of your most popular articles and documents by clicking
              the{" "}
              <Icon
                iconStyle="FontAwesome"
                iconName="bookmark-o"
                style={styles.bookmarkIconTiny}
              />{" "}
              icon.
            </Text>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Breadcrumb />
        <View style={styles.bookmarkScreenFormatting}>
          <FlatList
            data={bookmarks.bookmarkArray}
            renderItem={renderBookmarkItem}
          />
        </View>
      </View>
    );
  }
};

export default BookmarkScreen;
