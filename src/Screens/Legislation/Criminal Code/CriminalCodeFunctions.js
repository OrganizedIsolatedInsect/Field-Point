import { crimCodeDb } from "../../../Shared/Functions/Database";

//function to pull heading1_label and heading1 (part# and heading title) from Crim Code Database
//setDbData is the useState function to set the data base data pulled
export const getDbDataCrimCodeHeading = (setDbData) => {
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

//function to pull section data from Criminal Code Database
//setDbData is the useState function to set the data base data pulled
//partLabel is the Part of the Criminal Code sent to the sql query to pull sections
export const getDbDataCrimCodeSection = (partLabel, setDbData) => {
  crimCodeDb.transaction((tx) => {
    tx.executeSql(
      'SELECT DISTINCT Heading1_Label, Heading2 from criminal_code WHERE Heading2 NOT LIKE "" AND Heading1_Label = ? ',
      [partLabel],
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
