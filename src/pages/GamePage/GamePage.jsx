import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import gameService from '../../services/gameService'
import GameCard from '../../components/GameCard/GameCard'
import GameSwipe from '../../components/GameSwipe/GameSwipe'



const GamePage = () => {

  return (
    <div>
    <Button >Jugar con mazo original</Button>


    {/* <GameSwipe random={random}/> */}


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