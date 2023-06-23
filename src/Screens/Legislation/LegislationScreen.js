import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import styles, { Color } from "../../Shared/styles.js";

const LegislationScreen = () => {
  return (
    <ScrollView style={styles.homeScreenBackground}>
      <Text style={styles.homeScreenHeader}>
        What kind of Legislation are you looking for?
      </Text>
      <Text style={styles.homeScreenSubHeader}>
        Explore supporting information and resources
      </Text>
      <View style={styles.LegislationTilesView}>
        <Pressable
          android_ripple={{ color: Color.cardBody, foreground: true }}
          onPress={() => {}}
        >
          <Image
            source={require("../../Assets/Imgs/Legislation-Screen/motor-vehicle-150x160.jpg")}
            style={styles.LegislationImg}
          />
          <View style={styles.LegislationButtonTextView}>
            <Text style={styles.LegislationButtonText}>Motor Vehicle</Text>
          </View>
        </Pressable>

        <Pressable
          android_ripple={{ color: Color.cardBody, foreground: true }}
          onPress={() => {}}
        >
          <Image
            source={require("../../Assets/Imgs/Legislation-Screen/criminal-code-150x160.jpg")}
            style={styles.LegislationImg}
          />
          <View style={styles.LegislationButtonTextView}>
            <Text style={styles.LegislationButtonText}>
              Criminal Code of Canada
            </Text>
          </View>
        </Pressable>

        <Pressable
          android_ripple={{ color: Color.cardBody, foreground: true }}
          onPress={() => {}}
        >
          <Image
            source={require("../../Assets/Imgs/Legislation-Screen/cannabis-button-150x160.jpg")}
            style={styles.LegislationImg}
          />
          <View style={styles.LegislationButtonTextView}>
            <Text style={styles.LegislationButtonText}>Cannabis Act</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default LegislationScreen;
