import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { BookmarkIcon } from "../Bookmark/BookmarkIcon";
import { RoutingItems } from "../../Data/RoutingLookups"; //to determine visibility of icon on screen
import { useRoute } from "@react-navigation/native";

//button is temp until component for legislation is implemented

const LegislationScreen = ({ navigation }) => {
  const [showIcon, setShowIcon] = useState(false); //to enable whether the icon should display on the screen.
  const route = useRoute(); //put in header to check for visibilty.
  if (
    RoutingItems.includes(screenName => screenName.screenName == route.name)
  ) {
    setShowIcon(true);
  }
  return (
    <View>
      <View>
        {showIcon ? (
          <BookmarkIcon
            legislation="CrimCode"
            sectionNum={sectionNum}
            partLabel={partLabel}
            sectionHeading={sectionHeading}
          />
        ) : null}
      </View>
      <Button
        title="Criminal Code of Canada"
        onPress={() => navigation.navigate("CrimCodePartsScreen")}
      />
    </View>
  );
};

export default LegislationScreen;
