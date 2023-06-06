import { Col } from "react-bootstrap"
// import Card from "../Card/Card"
import CardComponent from "../Card/Card"

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