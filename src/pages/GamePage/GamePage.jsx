import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import { useParams } from 'react-router-dom'

import Deck from "../../components/Deck/Deck"
import deckService from "../../services/deckService"
import DeckList from '../../components/DeckList/DeckList'
import userService from '../../services/userService'


const GamePage = () => {

  const { user } = useContext(AuthContext)
  const [decks, setDecks] = useState()
  const { _id } = useParams()

  const [profileUser, setProfileUser] = useState(true)

  const [userDecks, setUserDecks] = useState()


  useEffect(() => {
    loadDecks()
  }, [])

  const loadDecks = () => {
    deckService
      .getOwnerDecks(user?._id)
      .then(({ data }) => setDecks(data))
      .catch(err => console.log(err))
  }
  return (
    <div>
      {
        user
          ?
          <>
            <Link to='/juego/mazo-original'>
              <Button className='me-2 btn-edit' style={{ color: 'white' }}>
                Mazo original
              </Button>
            </Link>

            {

              decks?.map(deck => {
                return (
                  // <Button className='me-2 btn-edit' style={{ color: 'white' }}>
                  //   {deck.name}
                  // </Button>
                  <Button className='me-2 btn-edit' style={{ color: 'white' }}>
                    <Link to={`/juego/${deck._id}`}>{deck.name}</Link>
                  </Button>

                )
              })
            }

          </>
          :

          <Link to='/juego/mazo-original'>
            <Button className='me-2 btn-edit' style={{ color: 'white' }}>
              Mazo original
            </Button>
          </Link>






      }

    </div>
  )
}

export default GamePage