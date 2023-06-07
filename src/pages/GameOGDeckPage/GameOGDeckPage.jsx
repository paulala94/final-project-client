import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import gameService from '../../services/gameService'
import GameCard from '../../components/GameCard/GameCard'
import GameSwipe from '../../components/GameSwipe/GameSwipe'



const GamePage = () => {

const [random, setRandom] = useState()

const handleClick = e => {
    gameService
        .getRandomOGCard()
        .then(({data}) => setRandom(data))
        .catch(err => console.log(err))
}

    // useEffect(() => {
    //     loadCards()
    // }, [])



  return (
    <div>
    <Button onClick={handleClick}>¡Empezar!</Button>


    <GameSwipe random={random}/>


    {/* {
        random?.map(elm => {
            return(
                <div key={elm._id}>
                    <GameCard {...elm}/>
                </div>
            )
        })
    } */}

    
    </div>
  )
}

export default GamePage