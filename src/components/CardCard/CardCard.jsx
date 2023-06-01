import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import cardService from "../../services/cardService"

// import './CardCard.css'

const CardCard = ({ name, description, genre,  owner, _id }) => {

    return (
        <Card className="mb-3 CardCard">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                {/* TODO: populate */}
                <Card.Text>Creada por: {owner}</Card.Text>

                <Link to={`/editar-carta/${_id}`}>Editar Carta</Link>

            </Card.Body>
        </Card>
    )
}

export default CardCard