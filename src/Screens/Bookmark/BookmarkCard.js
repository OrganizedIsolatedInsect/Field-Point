/*
    Bookmark Card renders the look and feel of ONE bookmark Item on the list of bookmarks.

*/
import React from "react";
import { View, Text, Pressable } from "react-native";
import { RoutingItems } from "../../Data/RoutingLookups"; //to determine which screen the legislation is to navigate to.
import { useNavigation } from "@react-navigation/native";
import styles from "../../Shared/styles";
import Icon from "../../Shared/Components/Icon.js";

export const BookmarkCard = ({ item }) => {
  const navAid = useNavigation();
  return (
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
};
