import { Col } from "react-bootstrap"
import DeckCard from "../DeckCard/DeckCard"

const DeckList = ({ decks }) => {

    return (
        decks?.map(elm => {
            return (
                <Col md={{ span: 4 }} key={elm._id}>
                    <DeckCard {...elm} />
                </Col>
            )
        })
    )
}

export default DeckList