import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import styles from "../../Shared/styles";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Icon from "../../Shared/Components/Icon.js";
import { RoutingItems } from "../../Data/RoutingLookups"; //to determine which screen the legislation is to navigate to.
import Breadcrumb from "../../Shared/Components/header/Breadcrumb";

const BookmarkScreen = () => {
  const navAid = useNavigation();
  const bookmarks = useSelector(state => state.bookmarks); //get bookmarks array

  const renderBookmarkItem = ({ item }) => (
    <View>
      <Pressable
        onPress={() => {
          //determine which screen to navigate to depending on which legislation is being passed.
          const screenRoute = RoutingItems.find(
            screenName => screenName.title == item.title
          );
          //this will navigation directly to the document that was bookmarked
          navAid.navigate(screenRoute.screenName, {
            sectionNum: item.sectionNum,
            partLabel: item.partLabel,
            sectionHeading: item.sectionHeading,
            title: item.title,
            legislation: item.legislation,
          });
        }}
      >
        <View style={styles.bookmarkContainer}>
          <View style={styles.bookmarkFlexContainer}>
            <View style={styles.bookmarkFlexOne}>
              <Text style={styles.bookmarkLabelRender}>Legislation: </Text>
            </View>

            <View style={styles.bookmarkFlexTwo}>
              <Text style={styles.bookmarkTextRender}>
                {item.legislation} {item.sectionNum}
              </Text>
            </View>
            <View style={styles.bookmarkFlexOne}>
              <Text style={styles.bookmarkChevronRender}>
                <Icon
                  iconStyle="FontAwesome"
                  iconName="angle-right"
                  style={styles.bookmarkIconRight}
                />
              </Text>
            </View>
          </View>
          <View>
            {/* as per design spec change, each heading will only be on 1 line with ellipses. */}
            <Text style={styles.bookmarkTitleRender} numberOfLines={1}>
              {item.sectionHeading}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );

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
              the
              <Icon
                iconStyle="FontAwesome"
                iconName="bookmark"
                style={styles.bookmarkIconTiny}
              />
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
