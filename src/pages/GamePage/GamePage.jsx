import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import { useParams } from 'react-router-dom'
import deckService from "../../services/deckService"

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
  console.log({decks})

  const buttonStyle = {
    width:'200px',
    height:'80px',
    color:'white'
  }

  return (
    <div style={{display:'flex',flexDirection:'column',gap:'15px'}}>
            <Link to='/juego/mazo-original'>
              <Button className='me-2 btn-edit' style={buttonStyle}>
                Mazo original
              </Button>
            </Link>

            {
            user &&  decks?.map(deck => 
                  <Link to={`/juego/${deck._id}`}>
                    <Button className='me-2 btn-edit' style={buttonStyle}>
                      {deck.name}
                    </Button>
                  </Link>

              )
            }          
    </div>
  )
}

export default GamePage