import React from "react";
import Styles from "../styles/CityTag.module.css";
export const CityTag = () => {
  return (
    <div className={Styles.cityTagContainer}>
      <span className={Styles.cityTagText}>Hydrabad</span>
    </div>
  );
};
