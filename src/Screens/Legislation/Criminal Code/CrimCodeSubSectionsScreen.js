import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getDbDataCrimCodeSubSection } from "./CriminalCodeFunctions";
import SubSectionCard from "../../../Shared/Components/SubSectionCard";

const CrimCodeSubSectionsScreen = ({ route }) => {
  //sectionHeading sent by sections component, taken via the naviagation route
  const { sectionHeading, sectionNum, partLabel } = route.params;

  const [dbSubSectionData, setDbSubSectionData] = useState([]);

  //function to get subSection data from database
  useEffect(() => {
    getDbDataCrimCodeSubSection(sectionHeading, setDbSubSectionData);
  }, [sectionHeading]);
  console.log(partLabel);

  return (
    <View>
      <Text>screen</Text>
    </View>
  );
};

export default CrimCodeSubSectionsScreen;
