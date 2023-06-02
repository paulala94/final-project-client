import { useState, useEffect } from 'react'
import deckService from '../../services/deckService'
import { useParams } from "react-router-dom"

// import { Link } from 'react-router-dom'
import EditDeckForm from '../../components/EditDeckForm/EditDeckForm'

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
        <div>
            <h1>Edita tu mazo</h1>

            <EditDeckForm />
        </div>
    )
}

export default EditDeckPage