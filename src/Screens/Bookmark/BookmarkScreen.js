import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles, { Color } from "../../Shared/styles";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

const BookmarkScreen = () => {
  const navAid = useNavigation();
  const bookmarks = useSelector(state => state.bookmarks);
  const dispatch = useDispatch();

  const renderBookmark = ({ item }) => (
    <View style={styles.bookmarkRender}>
      <Pressable>
        onPress=
        {() => {
          const docid = item.docid;
          const legislation = item.legislation; //make certain the legislation in the data is the same as the screen name
          navAid.navigate(legislation, { docid: docid }); //this should point directly to the document that was bookmarked
        }}
        <Text>
          Legislation: {item.legislation} {item.section} {"/n"}
          {item.title}
          {/* Make sure these are the correct field names */}
        </Text>
        {/* Icon to be possibly replaced with swipe gesture to bring up a delete button */}
        <Icon
          name="delete"
          size={20}
          onPress={() => dispatch(removeBookmark({ section: item.section }))}
        />
      </Pressable>
    </View>
  );

  /*Output Section*/

  if (bookmarks.sections.length === 0) {
    return (
      <View style={[styles.bookmarkScreenFormatting, styles.centerOnScreen]}>
        <Text style={[styles.title, { color: Color.primaryText }]}>
          No Bookmarks Currently
        </Text>
        <Icon
          name="collections-bookmark"
          size={200}
          style={{ color: Color.primaryText }}
        />
      </View>
    );
  } else {
    return (
      <SafeAreaView>
        <View style={styles.bookmarkScreenFormatting}>
          {/* conditional headers based on section array length */}

          <View>
            {/* here should be a breadcrumb */}
            <FlatList data={bookmarks.sections} renderItem={renderBookmark} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
};

export default BookmarkScreen;
