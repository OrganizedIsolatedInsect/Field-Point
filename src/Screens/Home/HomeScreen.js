import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import stylesHome from "./HomeScreenStyle.js";
import styles, { Color } from "../../Shared/styles.js";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Icon from "react-native-vector-icons/Ionicons";
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
      <View style={stylesHome.homeScreenPressableButton}>
        <Pressable
          android_ripple={{ color: Color.cardBody, foreground: true }}
          onPress={() => {}}
        >
          <Image
            style={stylesHome.homeScreenImg}
            source={require("./../../Assets/Imgs/Home-Screen/Legislation-button-home-334x120.jpg")}
          />
          <View style={stylesHome.homeScreenButtonView}>
            <FontAwesome5 name="book" size={36} color={Color.primaryText} />
            <Text style={stylesHome.homeScreenButtonText}>Legislation</Text>
          </View>
        </Pressable>
      </View>

      {/* Policy Button */}

      <HomeScreenButton
        imgURI={require("./../../Assets/Imgs/Home-Screen/Policy-button-home334x120.jpg")}
        iconStyle="FontAwesome"
        iconName="newspaper"
      />

      <Image
        style={stylesHome.homeScreenImg}
        source={require("./../../Assets/Imgs/Home-Screen/Policy-button-home334x120.jpg")}
      />

      {/* Resources Button */}

      <Image
        style={stylesHome.homeScreenImg}
        source={require("./../../Assets/Imgs/Home-Screen/Resources-button-home-334x120.jpg")}
      />

      <FontAwesome name="hourglass" color={Color.primaryText} size={36} />
      <Icon
        name="newspaper"
        color={Color.primaryText}
        size={36}
        style={{
          transform: [{ scaleX: -1 }],
        }}
      />
    </View>
  );
};

export default HomeScreen;
