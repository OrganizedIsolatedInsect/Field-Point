import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getDbDataCrimCodeSubSection } from "./CriminalCodeFunctions";
import SubSectionCard from "../../../Shared/Components/SubSectionCard";

//Screen to display CrimCode sub sections data from the section a user selects coming from the CrimCode parts screen.

const CrimCodeSubSectionsScreen = ({ route }) => {
  //sectionHeading sent by LegislationSectionsAccordion component, taken via the naviagation route
  const { sectionHeading, sectionNum, partLabel } = route.params;

  const [dbSubSectionData, setDbSubSectionData] = useState([]);

  //function to get subSection data from database
  useEffect(() => {
    getDbDataCrimCodeSubSection(partLabel, setDbSubSectionData);
  }, [sectionHeading]);

  return (
    <View>
      <SubSectionCard
        sectionHeading={sectionHeading}
        sectionNum={sectionNum}
        partLabel={partLabel}
        dbData={dbSubSectionData}
      />
    </View>
  );
};

export default CrimCodeSubSectionsScreen;
