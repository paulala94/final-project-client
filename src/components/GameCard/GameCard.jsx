import React, { useEffect, useState } from 'react'
import cardService from '../../services/cardService'
import { Card } from "react-bootstrap"



const GameCard = ({name, _id}) => {
    const [cards, setCards] = useState()

    useEffect(() => {
        getCard()
    }, [_id])

     const getCard = () => {
        cardService
            .getCardInfo(_id)
            .then(({ data }) => {
                setCards(data)
                
            })
            .catch(err => console.log(err))
    }

  return (
    <Card className="mb-3 Card">
            <Card.Body>
                <Card.Title>{name}</Card.Title>

            </Card.Body>
        </Card>
  )
}

export default GameCard