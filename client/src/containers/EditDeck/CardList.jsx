import styles from './CardList.module.css';
import {Link} from "react-router-dom";

import React from "react";

const CardList = ({id,name,photo_url,description,damage,health,manaCost}) => {
    const addToDeck = () => {

    }

    return (
                <li className={styles.list__item}>

                        <div className={styles.Card}>
                            <button onClick={addToDeck} className={styles.button}>add</button>
                            <Link to={`/card/${id}`}>
                            <div
                                className={styles.CardPortrait}
                                style={{ backgroundImage: `url(${photo_url})` }}
                            />
                            <div className={styles.CardMana}>{ manaCost || 0 }</div>
                            <h1 className={styles.CardName}>{name} </h1>
                            <h2 className={styles.CardDescription}>{description}</h2>
                            {damage ? <div className={styles.CardAttack}>{damage}</div> : <div/> }

                            {health ? <div className={styles.CardDefense}>{ health }</div> : <div />}
                            </Link>
                            </div>


                </li>
    )
}



export default CardList;
