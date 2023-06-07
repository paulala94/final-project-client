import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import './GameSwipe.css'


function GameSwipe({randomOG, setCounter, counter, setRandom}) {
    
   
    const [randomOGCards, setrandomOGCards] = useState([])
    const [currentTeam, setCurrentTeam] = useState(1)
    const [timmerRunning, setTimerRunning] = useState(false)

    const [timeCounter, setTimeCounter] = useState(30)


    useEffect(() => {
        if(timeCounter <= 0){
            setTimerRunning(false)
            setTimeCounter(30)
            currentTeam === 1 ? setCurrentTeam(2) : setCurrentTeam(1) 
            return
        }

        if(timmerRunning){
            setTimeout(() => setTimeCounter(timeCounter - 1), 1000)
        }
    }, [timeCounter,timmerRunning])


    useEffect(() =>{
        const randomized = randomOG?.map(card =>({...card, guessed: 0})) || []
        setrandomOGCards(randomized)
    }, [randomOG])

    const [lastDirection, setLastDirection] = useState()
    const correctCards = []

const swiped = (direction, cardName) => {
    
    if (direction === 'right') {
        setCounter(counter + 1);
        const updatedCards = randomOGCards?.map(card => {
            return card.name === cardName ? { ...card, guessed: currentTeam } : card
        })
        setrandomOGCards(updatedCards)
    }
    console.log('removing: ' + cardName)
    setLastDirection(direction)
};
    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

console.log({randomOGCards})

    return (
        <div>
            <div className='cardContainer'>
                 
            <p onClick={() => setTimerRunning(true)}>time counter: {timeCounter}</p>
                {randomOGCards?.map((cards) =>
                    <TinderCard className='swipe' key={cards.name} onSwipe={(dir) => swiped(dir, cards.name)} onCardLeftScreen={() => outOfFrame(cards.name)}>
                        <div className='card'>
                            <h3>{cards.name}</h3>
                        </div>
                    </TinderCard>
                )}
                
            </div>
            {lastDirection === 'right' ? <h2 className='infoText'>Carta acertada</h2> : <h2 className='infoText' />}
        </div>
    )
}

export default GameSwipe