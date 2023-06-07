import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import gameService from '../../services/gameService'
import GameSwipe from '../../components/GameSwipe/GameSwipe'
import Timer from '../../components/Timer/Timer'



const GamePage = () => {

const [random, setRandom] = useState()
const [buttonVisible, setButtonVisible] = useState(true)
const [timerVisible, setTimerVisible] = useState(false)
const [counterVisible, setCounterVisible] = useState(false)
const [counter1, setCounter1] = useState(0)


const handleClick = e => {
    gameService
        .getRandomOGCard()
        .then(({data}) => {
            setRandom(data)
            setButtonVisible(false)
            setTimerVisible(true)
            setCounterVisible(true)
        })
        .catch(err => console.log(err))
}

return (
    <div>
        
        {/* FALTA EL CONTADOR Y EL CRONÓMETRO*/}
        
        {counterVisible && <h1>Puntos: {counter1}</h1>}

        {timerVisible && <Timer />}

        {buttonVisible && <Button onClick={handleClick}>¡Empezar!</Button>}
        <GameSwipe randomOG={random} setCounter={setCounter1} counter={counter1}/>
    </div>
)

}

export default GamePage