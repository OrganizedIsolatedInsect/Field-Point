import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";

import LegislationPartsButton from "../../../Shared/Components/LegislationPartsButton";
import { getDbDataCrimCodeHeading } from "./CriminalCodeFunctions";

//screen to house top level of Criminal Code and display all the parts of the legislation
//parts are seperated by the component LegislationPartsButton, pressing will lead to sections of Crim Code

const CrimCodePartsScreen = () => {
  const [dbData, setDbData] = useState([]); // create array to house data from Crim Code Database

  //function to get heading data from database
  useEffect(() => {
    getDbDataCrimCodeHeading(setDbData);
  }, []);

  return (
    <View>
      <FlatList
        data={dbData}
        renderItem={({ item }) => {
          return (
            <LegislationPartsButton
              headingLabel={item.Heading1}
              partLabel={item.Heading1_Label}
            />
          );
        }}
      />
    </View>
  );
};

export default CrimCodePartsScreen;
