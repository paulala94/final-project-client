import { Col } from "react-bootstrap"
import Deck from "../Deck/Deck"

const DeckList = ({ decks }) => {

    return (
        decks?.map(elm => {
            return (
                <Col md={{ span: 4 }} key={elm._id}>
                    <Deck {...elm} />
                </Col>
            )
        })
    )
}

export default DeckList