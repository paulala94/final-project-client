import React, { useEffect, useState } from 'react'
import { Button, Col } from 'react-bootstrap'
import gameService from '../../services/gameService'
import GameSwipe from '../../components/GameSwipe/GameSwipe'

import { useParams } from 'react-router-dom'
import deckService from '../../services/deckService'




const GamePage = () => {

    const [random, setRandom] = useState()
    const [randomUser, setRandomUser] = useState()

    const { _id } = useParams()

    useEffect(() => {
        deckService
            .getRandomizedDeckCards(_id)
            .then(({ data }) => {
                setRandomUser(data)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        gameService
            .getRandomOGCard()
            .then(({ data }) => {
                setRandom(data)
            })
            .catch(err => console.log(err))

    }, [])


    return (
        <div >

            <div>
                <div className='d-flex justify-content-center'>
                    <GameSwipe randomOG={random} />

                </div>
            </div>
        </div>
    )

}

export default GamePage