// import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import EditCardForm from '../../components/EditCardForm/EditCardForm'
import { useParams } from 'react-router-dom'
import cardService from '../../services/cardService'


const EditProfilePage = () => {

    const { _id } = useParams()

    const [ card, setCard ] = useState()

    useEffect(() => {
        getCard()
    }, [])

    const getCard = () => {

        cardService
            .getAllCards(_id)
            .then(({ data }) => setCard(data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Edita tu carta</h1>

            <EditCardForm />
        </div>
    )
}

export default EditProfilePage