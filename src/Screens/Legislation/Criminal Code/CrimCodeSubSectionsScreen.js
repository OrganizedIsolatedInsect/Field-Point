import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { getDbDataCrimCodeSubSection } from "./CriminalCodeFunctions";
import SubSectionCard from "../../../Shared/Components/SubSectionCard";
import { BookmarkIcon } from "../../Bookmark/BookmarkIcon";

//Screen to display CrimCode sub sections data from the section a user selects coming from the CrimCode parts screen.

const CrimCodeSubSectionsScreen = ({ route }) => {
  //sectionHeading sent by LegislationSectionsAccordion component, taken via the naviagation route
  const { sectionHeading, sectionNum, partLabel } = route.params;
  const [dbSubSectionData, setDbSubSectionData] = useState([]);

  //function to get subSection data from database
  useEffect(() => {
    getDbDataCrimCodeSubSection(partLabel, setDbSubSectionData);
  }, [sectionHeading]);

  //Icon here is temporary until I can get the icon into the Header component
  return (
    <View>
      <View>
        <BookmarkIcon
          legislation="CrimCode"
          sectionNum={sectionNum}
          partLabel={partLabel}
          sectionHeading={sectionHeading}
        />
      </View>
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
