import React from 'react';

import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import icon from './img/icons8-доллар-сша-в-круге.gif'
import styles from './Money.module.css';

const Money = () => {
    const [count, setCount] = useState(0);

    // const storeData = useSelector(state => state.favoriteReducer);

    // useEffect(()=>{
    //     ФЕТЧ ЗАПРОС НА КОЛИЧЕСТВО БАБОК
    //
    // })
    return (
        <div className={styles.container}>
            <Link to="/buy">
                <span className={styles.counter}>{999}</span>
                <img className={styles.icon} src={icon} alt="Money"/>
            </Link>
        </div>
    )
}

export default Money;
