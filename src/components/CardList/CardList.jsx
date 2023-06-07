import { Col, Row } from "react-bootstrap"
import CardComponent from "../CardComponent/CardComponent"

const CardList = ({ cards }) => {


    return (
        cards?.map(elm => {
            return (
                <Col md={{ span: 4 }} key={elm._id}>
                    <CardComponent {...elm} />
                </Col>
            )
        })
    )
}

export default CardList