import { useState, useEffect } from 'react'
import deckService from '../../services/deckService'
import { useParams } from "react-router-dom"

// import { Link } from 'react-router-dom'
import EditDeckForm from '../../components/EditDeckForm/EditDeckForm'
import { Container } from 'react-bootstrap'

const EditDeckPage = () => {

    const [deckData, setDeckData] = useState({
        name: '',
        description: ''
    })

    const { _id } = useParams()

    useEffect(() => {
        getDeck()
    }, [])

    const getDeck = () => {

        deckService
            .getAllDecks(_id)
            .then(({ data }) => setDeckData(data))
            .catch(err => console.log(err))
    }
    const { name, description } = deckData

    return (
        <Container>
            <h1>Edita tu mazo</h1>

            <EditDeckForm />
        </Container>
    )
}

export default EditDeckPage