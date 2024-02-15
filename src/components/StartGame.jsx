import React from 'react'
import styles from "./StartGame.module.css";

const StartGame = ( {toggle} ) => {
  return (
    <>
        <div className={styles.main}>
            <img src='https://www.nicepng.com/png/detail/393-3933052_open-dice-svg.png' alt='dices' className={styles.image}></img>
            <h1 className={styles.text}>WELCOME TO DICE GAME</h1><br></br>
            <button className={styles.butn} onClick={toggle}>PLAY NOW</button>
        </div>
    </>
  )
}

export default StartGame;