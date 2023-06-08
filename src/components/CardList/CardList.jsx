import { Col } from "react-bootstrap"
import CardComponent from "../CardComponent/CardComponent"
import ArrowUp from "../ArrowUp/ArrowUp"

const CardList = ({ cards }) => {

    return (
        <>
            {
                cards?.map(elm => {

                    return (

                        <Col md={{ span: 6 }} key={elm._id}>
                            <CardComponent {...elm} />
                        </Col>



                    )
                })
            }




            < ArrowUp />
        </>
    )

}

export default CardList