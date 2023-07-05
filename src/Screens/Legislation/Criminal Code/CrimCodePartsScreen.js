import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import LegislationPartsAccordion from "../../../Shared/Components/LegislationPartsAccordion";
import { getDbDataCrimCodeHeading } from "./CriminalCodeFunctions";
import Breadcrumb from "../../../Shared/Components/header/Breadcrumb";

//screen to house top level of Criminal Code and display all the parts of the legislation
//parts are seperated by the component LegislationPartsAccordion, pressing will lead to sections of Crim Code
const CrimCodePartsScreen = () => {
  const [dbDataHeading, setDbDataHeading] = useState([]); // create array to house heading data from Crim Code Database //function to get heading data from database
  useEffect(() => {
    getDbDataCrimCodeHeading(setDbDataHeading);
  }, []);
  return (
    <View>
      <Breadcrumb />
      <FlatList
        data={dbDataHeading}
        renderItem={({ item }) => {
          return (
            <LegislationPartsAccordion
              headingLabel={item.Heading1}
              partLabel={item.Heading1_Label}
              sortIndex={item.SortIndex}
            />
          );
        }}
      />
    </View>
  );
};
export default CrimCodePartsScreen;
