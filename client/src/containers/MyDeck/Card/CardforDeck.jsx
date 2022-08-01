import React from 'react'
import { Image, Card, Text, Button } from '@geist-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { deckChangeActive } from '../../../store/deck/actionsCreator'
import './cardfordeck.css'

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
    <div className="deck-list">
  <Card key={deck.id} type="default" width="400px" shadow>
  <Image src="https://bnetcmsus-a.akamaihd.net/cms/gallery/qo/QO4VT6N2N0E91551294894197.png"
   height="200px" width="400px" draggable={false} />
  <Text style={{textAlign: 'center'}} h4 mb={0}>{deck.title}</Text>
  <Card.Footer style={{display: 'flex', justifyContent: 'space-between'}} >
  <Button onClick={handleUseDeck} auto style={{width: '100px'}} type="success">Use</Button>
  <Button auto style={{width: '100px'}} type="warning">Change</Button>
  <Button auto style={{width: '100px'}} type="error">Delete</Button>
  </Card.Footer>
  </Card>
  </div>
  )
}

export default CardforDeck
