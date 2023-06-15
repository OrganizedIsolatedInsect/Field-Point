import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import styles from "../styles";

export const AccordionUpIcon = () => {
  return (
    <Ionicons name="chevron-back-circle" style={styles.partsCheveronCircle} />
  );
};

export const AccordionDownIcon = () => {
  return (
    <Ionicons name="chevron-down-circle" style={styles.partsCheveronCircle} />
  );
};
