import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles, { Color } from "../../Shared/styles";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const BookmarkScreen = () => {
  const navAid = useNavigation();
  const bookmarks = useSelector(state => state.bookmarks);

  //FOR TESTING PURPOSES
  const forTesting = [
    { legislation: "Crim Code", docid: "874" },
    { legislation: "MVA", docid: "19.87" },
    { legislation: "Crim Code", docid: "486" },
    { legislation: "MVA", docid: "37 (2)" },
    { legislation: "Crim Code", docid: "29" },
    { legislation: "MVA", docid: "269 (3) (I) (f) (i)" },
    { legislation: "Crim Code", docid: "54899849" },
  ];

  console.log("inside bookmarkscreen");

  const renderBookmarkItem = ({ item }) => (
    <View>
      <Pressable
        onPress={() => {
          const docid = item.docid;
          const legislation = item.legislation; //make certain the legislation in the data is the same as the screen name
          //navAid.navigate(legislation, { docid: docid }); //this should point directly to the document that was bookmarked
        }}
      >
        <View style={styles.bookmarkContainer}>
          <View style={styles.bookmarkFlexContainer}>
            <View style={styles.bookmarkFlexOne}>
              <Text style={styles.bookmarkLabelRender}>Legislation: </Text>
            </View>

            <View style={styles.bookmarkFlexTwo}>
              <Text style={styles.bookmarkTextRender}>
                {item.legislation} {item.docid}
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

  if (bookmarks.bookmarkItem.length === 100) {
    console.log(".length === 0");
    return (
      <View style={[styles.bookmarkScreenFormatting, styles.centerOnScreen]}>
        <Text style={[styles.title, { color: Color.primaryText }]}>
          No Bookmarks Currently
        </Text>
        <Ionicons
          name="bookmarks-sharp"
          size={200}
          style={{ color: Color.primaryText }}
        />
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
            // data={bookmarks.bookmarkItem}
            data={forTesting}
            renderItem={renderBookmarkItem}
          />
        </View>
      </View>
    );
  }
};

export default BookmarkScreen;
