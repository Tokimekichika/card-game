

import styles from './EditDeck.module.css';
import {useEffect,useState} from "react";
import {initUser} from "../../store/auth/actionCreator";
import ShopCard from "../../components/ShopCard/ShopCard";
import React from "react";
import CardList from "./CardList";
import {useDispatch, useSelector} from "react-redux";
import {initDeck} from "../../store/deck/actionCreators";


const EditDeck = () => {
    const deck = useSelector((state) => state.deck.deck)
    console.log(deck)

    return (
        <>
            <ul className={styles.list__container}>
            {deck ? deck.map(el => <CardList key={el.id} id={el.id} name={el.name} photo_url={el.photo_url} description={el.description} damage={el.damage} health={el.health} manaCost={el.manaCost}/>)
                :
                <div/>
            }
            </ul>
                </>
    )
}


export default EditDeck;
