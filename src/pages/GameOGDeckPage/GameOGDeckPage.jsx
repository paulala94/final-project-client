import React, { useEffect, useState } from 'react'
import { Button, Col } from 'react-bootstrap'
import gameService from '../../services/gameService'
import GameSwipe from '../../components/GameSwipe/GameSwipe'

import { useParams } from 'react-router-dom'
import deckService from '../../services/deckService'




const GamePage = () => {

    const [deck, setDeck] = useState()

    const { _id } = useParams()


    useEffect(()=>{
        if(_id){
            deckService
                .getRandomizedDeckCards(_id)
                .then(({ data }) => {
                    setDeck(data)
                })
                .catch(err => console.log(err))

        }else{
            gameService
                .getRandomOGCard()
                .then(({ data }) => {
                    setDeck(data)
                })
                .catch(err => console.log(err))

        }
    },[] )

    return (
        <div >

            <div>
                <div className='d-flex justify-content-center'>
                    <GameSwipe randomOG={deck} />

                </div>
            </div>
        </div>
    )

}

export default GamePage