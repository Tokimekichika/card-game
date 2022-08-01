import React from 'react'
import { Image, Card, Text, Button } from '@geist-ui/core'


function CardforDeck({deck}) {
  
  // const handleUseDeck = async (event) => {
  //   event.preventDefault()
  //   console.log({active: !deck.active})
  //   const data = await fetch('/choiseDeck', {
  //     method: 'PUT',
  //     headers: 'Content-type: application/json',
  //     body: JSON.stringify({active:!deck.active})
  //   })
  //   const responce = await data.json()
  // }

  return (
  <Card key={deck.id} type="default" width="400px" shadow>
  <Image src="https://bnetcmsus-a.akamaihd.net/cms/gallery/qo/QO4VT6N2N0E91551294894197.png"
   height="200px" width="400px" draggable={false} />
  <Text style={{textAlign: 'center'}} h4 mb={0}>{deck.title}</Text>
  <Card.Footer style={{display: 'flex', justifyContent: 'space-between'}} >
  <Button auto style={{width: '100px'}} type="success">Use</Button>
  <Button auto style={{width: '100px'}} type="warning">Change</Button>
  <Button auto style={{width: '100px'}} type="error">Delete</Button>
  </Card.Footer>
  </Card>
  )
}

export default CardforDeck
