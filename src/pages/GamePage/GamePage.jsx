import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import DeckList from '../../components/DeckList/DeckList'
import deckService from "../../services/deckService"


const GamePage = () => {

  const { user } = useContext(AuthContext)
  const [decks, setDecks] = useState()

  useEffect(() => {
    loadDecks()
  }, [])

  const loadDecks = () => {
    deckService
      .getAllDecks()
      .then(({ data }) => setDecks(data))
      .catch(err => console.log(err))
  }

  return (
    <div>
      {
        user
          ?

          <Link to='/juego/mazo-original'>
            <Button className='me-2 btn-edit' style={{ color: 'white' }}>
              Mazo original
            </Button>
          </Link>

          :
          <>
            <Link to='/juego/mazo-original'>
              <Button className='me-2 btn-edit' style={{ color: 'white' }}>
                Mazo original
              </Button>
            </Link>

            <Button className='me-2 btn-edit' style={{ color: 'white' }}>
              <DeckList />
            </Button>

          </>

      }

    </div>
  )
}

export default GamePage