import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { getDbDataCrimCodeSubSection } from "./CriminalCodeFunctions";
import SubSectionCard from "../../../Shared/Components/SubSectionCard";
import { BookmarkIcon } from "../../Bookmark/BookmarkIcon";
import Breadcrumb from "../../../Shared/Components/header/Breadcrumb";

//Screen to display CrimCode sub sections data from the section a user selects coming from the CrimCode parts screen.

const CrimCodeSubSectionsScreen = ({ route }) => {
  //sectionHeading sent by LegislationSectionsAccordion component, taken via the naviagation route
  const { sectionHeading, sectionNum, partLabel } = route.params;
  const [dbSubSectionData, setDbSubSectionData] = useState([]);

  //function to get subSection data from database
  useEffect(() => {
    getDbDataCrimCodeSubSection(partLabel, setDbSubSectionData);
  }, [sectionHeading]);

  //Bookmark Icon here is temporary until I can get the icon into the Header component
  return (
    <View>
      <View>
        <BookmarkIcon
          legislation="CrimCode" //this may have to include a "screen name" prop to ensure that the legislation source is passed to the bookmark icon.  Then a lookup
          sectionNum={sectionNum} //to the model needs to be done to obtain the "legislation"
          partLabel={partLabel}
          sectionHeading={sectionHeading}
        />
      </View>
      <Breadcrumb partLabel={partLabel} />
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
