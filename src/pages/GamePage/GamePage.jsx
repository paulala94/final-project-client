import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'

const GamePage = () => {

  const { user } = useContext(AuthContext)

  return (
    <div>
      {
        user
          ?
          <Link to='/juego/mazo-original'>
            <Button variant="dark" className='me-2'>
              Mazon original
            </Button>
          </Link>
          :
          <Link to='/juego/mazo-original'>
            <Button variant="dark" className='me-2'>
              Mazon original
            </Button>
          </Link>
      }

    </div>
  )
}

export default GamePage