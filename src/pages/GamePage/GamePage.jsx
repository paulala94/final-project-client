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
        <Button variant="dark" className='me-2'>
            <Link to='/juego/mazo-original'>Mazo original</Link>
        </Button>
        :
        <Button variant="dark" className='me-2'>
            <Link to='/juego/mazo-original'>Mazo original</Link>
        </Button>
      }

    </div>
  )
}

export default GamePage