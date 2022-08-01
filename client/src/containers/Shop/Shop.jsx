import styles from './Shop.module.css';
import {useEffect, useState} from "react";
import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {buyDeck} from "../../store/shop/actionCreator";

const Shop = () => {
    const [state,setState] = useState(false)
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user)
    const buy = async() => {
        const responce = await fetch('/buycards')
        // dispatch(buyDeck())
        setState(true)
    }

    return (
        <>
            <section>
                <button onClick={buy}>Купить пак</button>
                {state ?
                    <div className={styles.Card}>
                        <div
                            className={styles.CardPortrait}
                            style={{ backgroundImage: `url(https://d15f34w2p8l1cc.cloudfront.net/hearthstone/804e1f61cbc0fbee886e5a43ddb1b592980166ce41e4bec6e4a956fd72ef83a3.png)` }}
                        />
                        <div className={styles.CardMana}>{ 5 || 0 }</div>
                        <h1 className={styles.CardName}>Jora </h1>
                        {  <div className={styles.CardAttack}>{ 10 }</div> }
                        { <div className={styles.CardDefense}>{ 10 }</div> }
                    </div>  : <div/>
              }
                <button onClick={buy}></button>

            </section>
        </>
    )
}


export default Shop;
