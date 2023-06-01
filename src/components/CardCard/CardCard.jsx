import { Card } from "react-bootstrap"

// import './CardCard.css'

const CardCard = ({ name, description, owner }) => {

    return (
        <Card className="mb-3 CoasterCard">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>Creada por: {owner}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardCard