import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import LegislationPartsButton from "../../../Shared/Components/LegislationPartsButton";
import { crimCodeDb } from "../../../Shared/Functions/Database";
import { FlatList } from "react-native";

//screen to house top level of Criminal Code and display all the parts of the legislation
//parts are seperated by the component LegislationPartsButton, pressing will lead to sections of Crim Code

const CrimCodePartsScreen = () => {
  const [dbData, setDbData] = useState([]); // create array to house data from Crim Code Database

  //function to pull heading1_label and heading1 (part# and heading title) from Crim Code Database
  const getDbData = () => {
    crimCodeDb.transaction((tx) => {
      tx.executeSql(
        'SELECT DISTINCT Heading1_Label,Heading1 from criminal_code WHERE Heading1_Label LIKE "Part%"',
        [],
        (tx, results) => {
          let tempArray = [];
          for (let i = 0; i < results.rows.length; i++) {
            tempArray.push(results.rows.item(i));
          }
          setDbData(tempArray);
        }
      );
    });
  };

  useEffect(() => {
    getDbData();
  }, []);
  /* 
  dbData.map((x) => {
    console.log(x);
  }); */

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
