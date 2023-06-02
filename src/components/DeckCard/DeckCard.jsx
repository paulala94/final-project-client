import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

// import './CardCard.css'

const DeckCard = ({ name, description, owner, _id }) => {

    return (
        <Card className="mb-3 DeckCard">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                {/* TODO: populate */}
                <Card.Text>Creado por: {owner}</Card.Text>
                <Link to={`/editar-mazo/${_id}`}>Editar mazo</Link>
            </Card.Body>
        </Card>
    )
}

export default DeckCard