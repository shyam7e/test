import React from "react";
import Styles from "../styles/SearchBar.module.css";
export const SearchBar = () => {
  return (
    <div className={Styles.searchBarContainer}>
      <input
        type="text"
        className={Styles.input}
        placeholder="Search restaurant,food"
      />
      <button className={Styles.submitButton}>
        <span className={Styles.goText}>GO</span>
      </button>
    </div>
  );
};
