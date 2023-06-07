import { Col, Row } from "react-bootstrap"
import Deck from "../Deck/Deck"

const DeckList = ({ decks }) => {

    return (
        decks?.map(elm => {
            return (
                <Col md={6} key={elm._id}>
                    <Deck {...elm} />
                </Col>
            )
        })
    )
}

export default DeckList