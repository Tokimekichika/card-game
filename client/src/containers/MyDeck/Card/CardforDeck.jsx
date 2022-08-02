import React from 'react'
// import { Image, Card, Text, Button } from '@geist-ui/core'
import { useDispatch } from 'react-redux'
import { deckChangeActive } from '../../../store/deck/actionsCreator'
import './cardfordeck.css'
import img from './img/card.jpeg'

function CardforDeck({deck}) {
  const dispatch = useDispatch()
  
  const handleUseDeck = async (event) => {
    event.preventDefault()
    console.log({ active: true })
    const data = await fetch('/active', {
      method: 'PUT',
      body: JSON.stringify({id: deck.id, active: true }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const responce = await data.json()
    dispatch(deckChangeActive(responce))
  }

  return (
    // <div className="decks-list">
    // <div className="deck-list">
      <div className='cards-container' key={deck.id} >
        <div className="img-card" url={img} />
        <div  className="text-card" h4 mb={0}>{deck.name}</div>
        <div className='footer-card'>
        <button onClick={handleUseDeck} className='btn-add-card' type="success">Добавить</button>
        <button className='btn-add-card' type="warning">Изменить</button>
        </div>
        </div>
  // </div>
  // </div>
  )
}

export default CardforDeck
