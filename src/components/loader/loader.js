import React from "react";
import styles from "./loader.module.css";

const Loader = (props) => {
  return (
    <div className={` ${styles.loader} text-center m-auto`}>
      <div
        class="spinner-border text-primary"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
      <p className="lead text-bold">Loading... </p>
    </div>
  );
};

export default Loader;
