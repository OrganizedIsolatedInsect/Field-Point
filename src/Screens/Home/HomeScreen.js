import { View, Text } from "react-native";
import React from "react";
import stylesHome from "./HomeScreenStyle.js";
import styles, { Color } from "../../Shared/styles.js";
import HomeScreenButton from "./HomeScreenButton.js";
import LegislationScreen from "../../Screens/Legislation/LegislationScreen.js";

const HomeScreen = () => {
  return (
    <View style={stylesHome.background}>
      <Text style={stylesHome.homeScreenHeader}>What are you looking for?</Text>
      <Text style={stylesHome.homeScreenSubHeader}>
        Explore supporting information and resources
      </Text>

      {/* Legislation Button */}

      <HomeScreenButton
        imgURI={require("./../../Assets/Imgs/Home-Screen/Legislation-button-home-334x120.jpg")}
        iconStyle="FontAwesome5"
        iconName="book"
        buttonText="Legislation"
        iconSize={36}
        iconColor={Color.primaryText}
        onPress={() => {}}
      />

      {/* Policy Button */}

      <HomeScreenButton
        imgURI={require("./../../Assets/Imgs/Home-Screen/Policy-button-home334x120.jpg")}
        iconStyle="FontAwesome"
        iconName="hourglass"
        buttonText="Policy"
        iconSize={36}
        iconColor={Color.primaryText}
        onPress={() => {}}
      />

      {/* Resources Button */}

      <HomeScreenButton
        imgURI={require("./../../Assets/Imgs/Home-Screen/Resources-button-home-334x120.jpg")}
        iconStyle="Ionicons"
        iconName="newspaper"
        buttonText="Resources"
        iconSize={36}
        iconColor={Color.primaryText}
        onPress={() => {}}
      />

      <HomeScreenButton
        imgURI={require("./../../Assets/Imgs/Home-Screen/Resources-button-home-334x120.jpg")}
        iconStyle="MaterialCommunityIcons"
        iconName="twitter"
        buttonText="Testing"
        iconSize={80}
        iconColor={Color.primaryText}
        onPress={() => {}}
      />
    </View>
  );
};

export default HomeScreen;
