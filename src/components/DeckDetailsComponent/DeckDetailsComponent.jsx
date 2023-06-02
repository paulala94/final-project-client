import React, { useEffect, useState } from 'react'
import deckService from '../../services/deckService'
import { useParams } from 'react-router-dom'
import DeckList from '../DeckList/DeckList'

const DeckDetailsComponent = () => { 

  const { _id } = useParams()
  
  const [ userDecks, setUserDecks ] = useState()

  const getDecks = () => {

    deckService
      .getOwnerDecks(_id)
      .then(({data}) => {
        setUserDecks(data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getDecks()
  }, [_id])

  return (
    <div className="container">
      <DeckList decks={userDecks} />
    </div>
    )
}

export default DeckDetailsComponent