import { Text, ScrollView } from "react-native";
import React from "react";
import styles, { Color } from "../../Shared/styles.js";
import HomeScreenButton from "../../Shared/Components/HomeScreenButton.js";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.homeScreenBackground}>
      <Text style={styles.homeScreenHeader}>What are you looking for?</Text>
      <Text style={styles.homeScreenSubHeader}>
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
        onPress={() => navigation.navigate("LegislationScreen")}
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
    </ScrollView>
  );
};

export default HomeScreen;
