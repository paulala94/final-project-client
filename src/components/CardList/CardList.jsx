import { Col } from "react-bootstrap"
import CardCard from "../CardCard/CardCard"

const CardList = ({ cards }) => {

    return (
        cards.map(elm => {
            return (
                <Col md={{ span: 4 }} key={elm._id}>
                    <CardCard {...elm} />
                </Col>
            )
        })
    )
}

export default CardList