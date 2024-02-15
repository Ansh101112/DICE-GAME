import React, { useState } from "react";
import styles from "./SelectNumber.module.css";
import styled from "styled-components";

const SelectNumber = ({ SelectedNumber , SetSelectedNumber }) => {
  const arrnum = [1, 2, 3, 4, 5, 6];

  console.log(SelectedNumber);
  return (
    <>
      <main>
        <div className={styles.mains}>
          {arrnum.map((value, i) => (
            <Box
              isSelected={value === SelectedNumber}
              key={i}
              onClick={() => SetSelectedNumber(value)}
            >
              {value}
            </Box>
          ))}
        </div>
        <p className={styles.para}>SELECT A NUMBER </p>
      </main>
    </>
  );
};

export default SelectNumber;

const Box = styled.div`
  height: 52px;
  width: 52px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
