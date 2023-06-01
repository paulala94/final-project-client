import { Card } from "react-bootstrap"

// import './CardCard.css'

const DeckCard = ({ name, description, owner }) => {

    return (
        <Card className="mb-3 DeckCard">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                {/* TODO: populate */}
                <Card.Text>Creado por: {owner}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default DeckCard