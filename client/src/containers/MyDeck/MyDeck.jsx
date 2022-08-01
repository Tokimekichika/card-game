import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './mydeck.css'
import CardforDeck from './Card/CardforDeck'

function MyDeck() {
  const myDeck = useSelector(state => state.deck.myDeck)

  return (
    <>
    <div className='cont'>
      <h4>Мои колоды</h4>
      <button className="btn__mydeck"><span>Добавить колоду</span></button>
      {myDeck && (
        myDeck.map((deck) => (
          <CardforDeck key={deck.id} deck={deck} />
        ))
      )}
    </div>
    </>
  )
}

export default MyDeck
