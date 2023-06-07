import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import './GameSwipe.css'
import { Col, Row } from 'react-bootstrap'


function GameSwipe({ randomOG, setCounter, counter, setRandom }) {


    const [randomOGCards, setrandomOGCards] = useState([])
    useEffect(() => {
        setrandomOGCards(randomOG?.map(card => ({ ...card, guessed: false })) || [])
    }, [randomOG])

    const [lastDirection, setLastDirection] = useState()
    const correctCards = []

    //     const swiped = (direction, cardName) => {

    //         if(direction === 'right') {
    //             setCounter(counter+1)
    //             correctCards.push(cardName)
    //             setrandomOGCards(cards =>({

    // //aqui!!
    //             }))

    //         }
    //         console.log('removing: ' + cardName)
    //         setLastDirection(direction)
    //     }



    const swiped = (direction, cardName) => {
        if (direction === 'right') {
            setCounter(counter + 1);
            const updatedCards = randomOGCards?.map(card => {
                if (card.name === cardName) {
                    return { ...card, guessed: true };
                }
                return card;
            });
            setrandomOGCards(updatedCards);
        }
        console.log('removing: ' + cardName);
        setLastDirection(direction);
    }
    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    console.log(correctCards)

    return (
        <div className='d-flex justify-content-center'>
            <Col>

                <div className='cardContainer '>

                    {randomOGCards?.map((cards) =>
                        <TinderCard className='swipe' key={cards.name} onSwipe={(dir) => swiped(dir, cards.name)} onCardLeftScreen={() => outOfFrame(cards.name)}>
                            <div className='card'>
                                <h3>{cards.name}</h3>
                            </div>
                        </TinderCard>
                    )}

                </div>
                {lastDirection === 'right' ? <h2 className='infoText'>Carta acertada</h2> : <h2 className='infoText' />}
            </Col>
        </div>
    )
}

export default GameSwipe