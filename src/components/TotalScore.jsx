import React from "react";
import styles from "./TotalScore.module.css";

const TotalScore = ({ score }) => {
  return (
    <main>
      <div className={styles.main}>
        <h1> { score } </h1>
        <p>Total Score</p>
      </div>
    </main>
  );
};

export default TotalScore;
