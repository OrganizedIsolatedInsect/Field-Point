import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import styles, { Color } from "../../Shared/styles";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { RoutingItems } from "../../Data/RoutingLookups";

/*
 This component needs to pass to the onpress:
 component name vs database field
partLabel       = heading1_label
sectionNum      = id
sectionHeading  = heading2
*/

const BookmarkScreen = () => {
  const navAid = useNavigation();
  const bookmarks = useSelector(state => state.bookmarks);

  //FOR TESTING PURPOSES
  const forTesting = [
    {
      legislation: "CrimCode",
      sectionNum: "874",
      partLabel: "",
      sectionHeading: "",
    },
    {
      legislation: "MVA",
      sectionNum: "19.87",
      partLabel: "",
      sectionHeading: "",
    },
    {
      legislation: "CrimCode",
      sectionNum: "486",
      partLabel: "",
      sectionHeading: "",
    },
    {
      legislation: "MVA",
      sectionNum: "37 (2)",
      partLabel: "",
      sectionHeading: "",
    },
    {
      legislation: "CrimCode",
      sectionNum: "29",
      partLabel: "",
      sectionHeading: "",
    },
    {
      legislation: "MVA",
      sectionNum: "269 (3) (I) (f) (i)",
      partLabel: "",
      sectionHeading: "",
    },
    {
      legislation: "CrimCode",
      sectionNum: "54899849",
      partLabel: "",
      sectionHeading: "",
    },
  ];

  console.log("inside bookmarkscreen");
  console.log(RoutingItems);

  const renderBookmarkItem = ({ item }) => (
    <View>
      <Pressable
        onPress={() => {
          const screenRoute = RoutingItems.find(
            legislation => legislation.legislation == item.legislation
          );

          console.log(screenRoute);
          const sectionNum = item.sectionNum;
          const legislation = item.legislation; //make certain the legislation in the data is the same as the screen name
          const partLabel = item.partLabel;
          const sectionHeading = item.sectionHeading;
          navAid.navigate(screenRoute.screenName, {
            sectionNum,
            partLabel,
            sectionHeading,
          }); //this should point directly to the document that was bookmarked
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
                <FontAwesome
                  name="angle-right"
                  size={20}
                  style={{ color: Color.primaryText }}
                />
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.bookmarkTitleRender}>
              This is where the title goes
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );

  /*Output Section*/

  if (bookmarks.bookmarkItem.length === 10) {
    console.log(".length === 0");
    return (
      <View style={[styles.bookmarkScreenFormatting, styles.centerOnScreen]}>
        <Ionicons
          name="bookmarks-sharp"
          size={200}
          style={{ color: Color.primaryText }}
        />
        <Text style={styles.bookmarkNoneTitleRender}>No Bookmarks Yet</Text>
        <View style={styles.bookmarkNoneLabelRender}>
          <Text
            style={[styles.bookmarkTextRender, styles.bookmarkNoneBoxRender]}
          >
            Keep track of your most popular articles and documents by clicking
            the <FontAwesome name="bookmark" size={15} /> icon.
          </Text>
        </View>
      </View>
    );
  } else {
    console.log("inside else");
    return (
      <View style={styles.bookmarkScreenFormatting}>
        {/* conditional headers based on section array length */}

        <View>
          {/* here should be a header/search */}
          {/* here should be a breadcrumb */}
          <FlatList
            //data={bookmarks.bookmarkItem}
            data={forTesting}
            renderItem={renderBookmarkItem}
          />
        </View>
      </View>
    );
  }
};

export default BookmarkScreen;
