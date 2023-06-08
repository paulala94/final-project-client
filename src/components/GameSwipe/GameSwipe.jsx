import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import './GameSwipe.css'
import { Col, Row, Button } from 'react-bootstrap'
import Team1 from '../Team1/Team1'
import Team2 from '../Team2/Team2'
import Timer from '../Timer/Timer'


function GameSwipe({ randomOG }) {


    const [randomOGCards, setrandomOGCards] = useState([])


    const [currentTeam, setCurrentTeam] = useState(1)
    const ROUND_TIME = 5

    const [pointsCounterVisible, setPointsCounterVisible] = useState(false)

    const [timerVisible, setTimerVisible] = useState(false)
    const [timeCounter, setTimeCounter] = useState(ROUND_TIME)
    const [timerRunning, setTimerRunning] = useState(false)

    useEffect(() => {
        if (timeCounter <= 0) {
            setTimerRunning(false)
            setTimeCounter(ROUND_TIME)
            currentTeam === 1 ? setCurrentTeam(2) : setCurrentTeam(1)
            return
        }
    }, [timeCounter])


    const randomizeCards = () => {
        const randomized = randomOG?.map(card => ({ ...card, guessed: 0 })) || []
        setrandomOGCards(randomized)
    }

    useEffect(() => {
        randomizeCards()
    }, [randomOG])

    useEffect(() => {
        console.log(randomOGCards)
        // if (!randomOGCards) {
        //     return
        // }


    }, [randomOGCards])

    const teamOneCards = []
    const teamTwoCards = []


    const [lastDirection, setLastDirection] = useState()


    const handleClick = () => {
        setTimerRunning(true)
        setTimeCounter(ROUND_TIME - 1)
    }

    function swiped(direction, cardName) {
        console.log({ direction, cardName })


        //si se descomenta esto se empizan a llamar cartas de manera exponencial y peta

        if (direction === 'right') {
            const updatedCards = randomOGCards?.map(card => {
                return card.name === cardName ? { ...card, guessed: currentTeam } : card
            })
            setrandomOGCards(updatedCards)
        }
    }

    // const swiped = (direction, cardName) => {
    //     console.log({ direction, cardName })


    //si se descomenta esto se empizan a llamar cartas de manera exponencial y peta

    // if (direction === 'right') {

    //     currentTeam === 1 ? teamOneCards.push(cardName) : teamTwoCards.push(cardName)


    // const updatedCards = await randomOGCards?.map(card => {
    //     return card.name === cardName ? { ...card, guessed: currentTeam } : card
    // })
    // setrandomOGCards(updatedCards)


    return (
        <div>
            <div>
                {timeCounter === ROUND_TIME && (
                    currentTeam === 1
                        ?
                        <>
                            <Button onClick={handleClick}>TE TOCA EQUIPO 1!!!! VAMOOOS ESTOY A TOPE JEFE DE EQUIPO</Button>
                        </>
                        :
                        <>
                            <Button onClick={handleClick}>TE TOCA EQUIPO 2!!!! SUUUUUUUUUUUUU</Button>
                        </>
                )}
            </div>


            <div style={{ display: timerRunning ? 'inherit' : 'none' }}>
                <div className='cardContainer'>
                    {randomOGCards.map(card => (
                        <TinderCard className='swipe' key={card._id} onSwipe={(dir) => swiped(dir, card.name)}>
                            <div className='card'>
                                {card.name}
                            </div>
                        </TinderCard>

                    ))}

                </div>
                <Timer setTimeCounter={setTimeCounter} ROUND_TIME={ROUND_TIME} setTimerRunning={setTimerRunning} timeCounter={timeCounter} />

                {/* <p>Tiempo restante: {timeCounter}</p> */}

            </div>



        </div>
    )
}

export default GameSwipe