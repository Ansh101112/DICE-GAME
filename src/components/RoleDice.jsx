import React, { useState } from "react";
import styles from "./RoleDice.module.css";

const RoleDice = () => {
const [rolling, setRolling] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = (rollDice,currentDice) => {
    if (!rolling) {
      setRolling(true);
      const randomNumber = generateRandomNumber(1, 7);
      setTimeout(() => {
        setCurrentDice(randomNumber);
        setRolling(false);
      }, 800); 
    }
  };

  return (
    <>
      <div className={styles.imgbox}>
        <img
          src={`/images/dice_${currentDice}.png`}
          alt={`dice${currentDice}`}
          onClick={rollDice}
          className={rolling ? styles.rolling : ""}
        ></img>
        <p>Click on Dice to roll</p>
      </div>
    </>
  );
};

export default RoleDice;
