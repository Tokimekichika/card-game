import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './mydeck.css'
import CardforDeck from './Card/CardforDeck'
import { Modal, Button, Input } from '@geist-ui/core'
import { createDeck } from '../../store/deck/actionsCreator'

function MyDeck() {
  const user = useSelector(state => state.auth.user)
  const ref = useRef()
  const dispatch = useDispatch()
  const myDeck = useSelector(state => state.deck.myDeck)
  const [state, setState] = useState(false)
  const handler = () => setState(true)
  const closeHandler = (event) => {
    setState(false)
  }

  const deckCreateHandle = async (event) => {
    const title = ref.current.value
    setState(false)
    const data = await fetch('/create', {
      method: 'POST',
      body: JSON.stringify({title, id: user.id}),
      headers: {
        "Content-Type": "application/json",
      },

    })
    const responce = await data.json()
    dispatch(createDeck(responce))
  }

  return (
    <>
    <div className="cont">
      <h4>Мои колоды</h4>
      <div>
        <form onSubmit={deckCreateHandle}>
          <Button auto onClick={handler}>Добавить колоду</Button>
          <Modal visible={state} onClose={closeHandler}>
            <Modal.Title>Добавление колоды</Modal.Title>
            <Modal.Content>
              <Input ref={ref} name="idc" placeholder="Имя колоды" />
            </Modal.Content>
            <Modal.Action passive onClick={() => setState(false)}>Cancel</Modal.Action>
            <Modal.Action onClick={deckCreateHandle}>Create</Modal.Action>
          </Modal>
        </form>
    </div>
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
