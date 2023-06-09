import React, { useEffect, useState } from 'react'
import './GameSwipe.css'
import { Modal, Card } from 'react-bootstrap'
import Timer from '../Timer/Timer'
import RoundModal from '../RoundModal/RoundModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";


function GameSwipe({ randomOG }) {

    const ROUND_TIME = 5000
    const [randomOGCards, setrandomOGCards] = useState(null)
    const [currentTeam, setCurrentTeam] = useState(1)
    const [showModal, setShowModal] = useState(false)
    const [rounds, setRounds] = useState(1)
    const [timeCounter, setTimeCounter] = useState(ROUND_TIME)
    const [timerRunning, setTimerRunning] = useState(false)
    const [winner, setWinner] = useState(0)
    const [startRound, setStartRound] = useState(null)
    const [guessedCards, setGuessedCards] = useState([])
    const [teamOnePoints, setTeamOnePoints] = useState(0)
    const [teamTwoPoints, setTeamTwoPoints] = useState(0)

    useEffect(() => {
        if (timeCounter <= 0) {
            setTimerRunning(false)
            setTimeCounter(ROUND_TIME)
            currentTeam === 1 ? setCurrentTeam(2) : setCurrentTeam(1)
            return
        }

    }, [timeCounter])

    const updatedWithGuessedCards = () => {
        const cardsWithGuessed = randomOG?.map(card => ({ ...card, guessed: 0 })) || []
        randomOG?.length && setrandomOGCards(cardsWithGuessed)
    }

    useEffect(() => {
        handleRounds()
    }, [randomOGCards])

    useEffect(() => {
        updatedWithGuessedCards()
    }, [randomOG])

    const handleClick = () => {
        setTimerRunning(true)
        setTimeCounter(ROUND_TIME)
        setStartRound(true)
    }

    const handleCorrect = () => {
        const currentCard = randomOGCards?.find(card => card.guessed === 0) // no se si esto pilla currrent card

        if (currentCard) {
            const updatedGuessedCards = [...guessedCards, { ...currentCard, guessed: currentTeam }]
            setGuessedCards(updatedGuessedCards)
        }

        const updatedRandomOGCards = randomOGCards?.filter(card => card._id !== currentCard._id)
        setrandomOGCards(updatedRandomOGCards)
    }

    const handleWinner = () => {
        const team1 = guessedCards?.filter(elm => elm.guessed === 1)
        const team2 = guessedCards?.filter(elm => elm.guessed === 2)

        if (team1.length > team2.length) {
            setWinner(1)
            setTeamOnePoints(teamOnePoints + 1)
        }
        else {
            setWinner(2)
            setTeamTwoPoints(teamTwoPoints + 1)
        }
    }

    const handleRounds = () => {
        if (randomOGCards?.length === 0) {
            setRounds(rounds + 1)
            setTimeCounter(0)
            handleWinner()
            setShowModal(true)
        }
    }

    const nextRound = () => {
        setGuessedCards([])
        updatedWithGuessedCards()
        setTimeCounter(0)
        shuffleCards()
    }

    useEffect(() => {
        if (rounds > 3) {
            setShowModal(true)
        }
    }, [rounds])

    const shuffleCards = () => {
        guessedCards?.sort(() => Math.random()-0.5)
        setrandomOGCards(guessedCards)
    }

    return (
      <div>
        <div>
          {timeCounter === ROUND_TIME &&
            (currentTeam === 1 ? (
              <>
                <div onClick={handleClick} className="btn-players">
                  <strong>¡¡TE TOCA EQUIPO 1!!</strong>
                </div>
              </>
            ) : (
              <>
                <div onClick={handleClick} className="btn-players">
                  ¡¡TE TOCA EQUIPO 2!!
                </div>
              </>
            ))}
        </div>
        {showModal && (
          <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="text-center"
          >
            <RoundModal winner={winner} style="{{color:'#F77E21'}}" />
            <div onClick={nextRound} className="next-round">
              SIGUIENTE RONDA
            </div>
          </Modal>
        )}
        <div style={{ display: timerRunning ? "inherit" : "none" }}>
          <div className="cardContainer">
            {randomOGCards?.map((card) => (
              <div key={card._id} className="card-game">
                <div className="card-game">
                  <p className="card-game-p">{card.name}</p>
                </div>
              </div>
            ))}
          </div>
          <Timer
            setTimeCounter={setTimeCounter}
            ROUND_TIME={ROUND_TIME}
            timerRunning={timerRunning}
            setTimerRunning={setTimerRunning}
            timeCounter={timeCounter}
            startRound={startRound}
            setStartRound={setStartRound}
            currentTeam={currentTeam}
            setCurrentTeam={setCurrentTeam}
          />

          <div onClick={handleCorrect} className="btn-acierto scale-up-center">
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#F77E21", fontSize: "100px" }}
            />
          </div>

          <div className="btn-acierto scale-up-center">
            <FontAwesomeIcon
              icon={faTimesCircle}
              style={{ color: "#f77e21", fontSize: "100px" }}
            />
          </div>
        </div>
      </div>
    );
}

export default GameSwipe