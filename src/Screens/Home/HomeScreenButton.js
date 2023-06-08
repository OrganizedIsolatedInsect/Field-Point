import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import stylesHome from "./HomeScreenStyle.js";
import styles, { Color } from "../../Shared/styles.js";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Icon from "react-native-vector-icons/Ionicons";
import LegislationScreen from "../../Screens/Legislation/LegislationScreen.js";

const HomeScreenButton = (props) => {
  let iconStyle = props.iconStyle;
  let iconName = props.iconName;

  return (
    <View>
      <Image style={stylesHome.homeScreenImg} source={props.imgURI} />
      <View style={stylesHome.homeScreenButtonView}>

{/* If else render function */}
{/* source: https://stackoverflow.com/questions/40477245/is-it-possible-to-use-if-else-statement-in-react-render-function */}

        {(() => {
          if (props.iconStyle == "FontAwesome5") {
            return (
              <FontAwesome5 name={iconName} size={36} color={Color.primaryText} />
            );
          } else if (props.iconStyle == "FontAwesome") {
            return (
              <FontAwesome name="book" size={36} color={Color.primaryText} />
            );
          } else {
            return (
              <FontAwesome name="book" size={36} color={Color.primaryText} />
            );
          }
        })()}

{/* End if render function */}

        {/* <FontAwesome5 name="book" size={36} color={Color.primaryText} /> */}
        <Text style={stylesHome.homeScreenButtonText}>Legislation</Text>
      </View>
    </View>
  );
};

export default HomeScreenButton;
