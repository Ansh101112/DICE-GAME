import React from "react";
import TotalScore from "./TotalScore";
import SelectNumber from "./SelectNumber";
import styles from "./GamePLay.module.css";
import RoleDice from "./RoleDice";
import { useState } from "react";

const GamePlay = () => {
  const [SelectedNumber, SetSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setscore] = useState(0);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const RoleDice = () => {
    if (!SelectedNumber) {
      setError("You have not selected any number");
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);
    if (SelectedNumber === randomNumber) {
      setscore((prev) => prev + randomNumber);
    } else {
      setscore((prev) => prev - 2);
    }
    
  };

  return (
    <>
      <div className={styles.topsection}>
        <TotalScore score={score}></TotalScore>
        <SelectNumber
          SelectedNumber={SelectedNumber}
          SetSelectedNumber={SetSelectedNumber}
        ></SelectNumber>
      </div>
      <RoleDice currentDice={currentDice} roleDice={RoleDice} />
    </>
  );
};


export default GamePlay;