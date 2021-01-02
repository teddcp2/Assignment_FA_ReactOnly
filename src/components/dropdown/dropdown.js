import React from "react";
import { useSelector } from "react-redux";
import styles from "./dropdown.module.css";

let mapObjects = {
  "dropdown-option": styles.dropdownOption,
  invalid: styles.invalid
};

const Dropdown = ({ handleChange, value, classes, category, validation }) => {
  let options = useSelector((state) => state.categories);

  let myClasses = classes.concat(" ", mapObjects[category], " ");
  if (validation === "invalid") {
    myClasses.concat(mapObjects["invalid"]);
  }
  // console.log(options);

  return (
    <select
      className={myClasses}
      id="options"
      value={value}
      onChange={handleChange}
    >
      <option>Select a bucket</option>
      {options.map((option, idx) => (
        <option key={idx}>{option}</option>
      ))}
    </select>
  );
};

export default Dropdown;
