import React, { useEffect, useState } from 'react'
import { Button, Col } from 'react-bootstrap'
import gameService from '../../services/gameService'
import GameSwipe from '../../components/GameSwipe/GameSwipe'
import Timer from '../../components/Timer/Timer'



const GamePage = () => {

    const [random, setRandom] = useState()


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