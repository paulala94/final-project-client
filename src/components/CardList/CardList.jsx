import { Col } from "react-bootstrap"
import CardComponent from "../CardComponent/CardComponent"

const CardList = ({ cards }) => {

    return (
        cards?.map(elm => {
            return (
                <Col md={{ span: 6 }} key={elm._id}>
                    <CardComponent {...elm} />
                </Col>
            )
        })
    )
}

export default CardList