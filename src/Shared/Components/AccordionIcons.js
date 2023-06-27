import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import styles from "../styles";

//Component for the Icon to display when Icon is closed
export const AccordionCloseIcon = () => {
  return (
    <Ionicons name="chevron-back-circle" style={styles.partsCheveronCircle} />
  );
};

//Component for the Icon to display when Icon is open
export const AccordionOpenIcon = () => {
  return (
    <Ionicons name="chevron-down-circle" style={styles.partsCheveronCircle} />
  );
};

//Component for the Icon to display for sections to move to subsections
export const AccordionSectionIcon = () => {
  return <Ionicons name="chevron-forward" style={styles.sectionsCheveron} />;
};
