import React, { useEffect, useState } from 'react'
import './GameSwipe.css'
import { Button, Card } from 'react-bootstrap'
import Timer from '../Timer/Timer'


function GameSwipe({ randomOG }) {

    const [randomOGCards, setrandomOGCards] = useState([])

    const [currentTeam, setCurrentTeam] = useState(1)

    const [showCurrentCard, setShowCurrentCard] = useState(true)

    const ROUND_TIME = 10

    const [pointsCounterVisible, setPointsCounterVisible] = useState(false)

    // const [timerVisible, setTimerVisible] = useState(false)
    const [timeCounter, setTimeCounter] = useState(ROUND_TIME)
    const [timerRunning, setTimerRunning] = useState(false)

    const [startRound, setStartRound] = useState(null)
    const [guessedCards, setGuessedCards] = useState([])


    useEffect(() => {
        if (timeCounter <= 0) {
            setTimerRunning(false)
            setTimeCounter(ROUND_TIME)
            // currentTeam === 1 ? setCurrentTeam(2) : setCurrentTeam(1)
            return
        }
    }, [timeCounter])

    const updatedWithGuessedCards = () => {
        const cardsWithGuessed = randomOG?.map(card => ({ ...card, guessed: 0 })) || []
        setrandomOGCards(cardsWithGuessed)
    }

    useEffect(() => {
        updatedWithGuessedCards()
    }, [randomOG])

    const handleClick = () => {
        setTimerRunning(true)
        setTimeCounter(ROUND_TIME)
        setStartRound(true)
    }


    const handleCorrect = () => {
        const currentCard = randomOGCards.find(card => card.guessed === 0)
        
        if (currentCard) {
            const updatedGuessedCards = [...guessedCards, currentCard]
            setGuessedCards(updatedGuessedCards)
        }

        const updatedRandomOGCards = randomOGCards.filter(card => card._id !== currentCard._id)
        setrandomOGCards(updatedRandomOGCards)

        // console.log(guessedCards)
        // setShowCurrentCard(false)
    }

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

                        <Card key={card._id}>
                            <div className='card'>
                                {card.name}
                            </div>
                        </Card>

                    ))}

                </div>
                <Timer setTimeCounter={setTimeCounter} ROUND_TIME={ROUND_TIME} timerRunning={timerRunning} setTimerRunning={setTimerRunning} timeCounter={timeCounter} startRound={startRound} setStartRound={setStartRound} currentTeam={currentTeam} setCurrentTeam={setCurrentTeam}
                />

                <div>
                    <Button onClick={handleCorrect}>acierto</Button>
                </div>

                {/* <div>
                     <Button onClick={handlePassed}>fallo</Button>
                </div> */}

            </div>

        </div>
    )
}

export default GameSwipe