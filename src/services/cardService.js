import axios from 'axios'

class CardService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api/card`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    create(cardData) {
        return this.api.post('/createCard', cardData)
    }

    getAllCards(cardData) {
        return this.api.get('/getAllCards', cardData)
    }

    getCardInfo(_id, cardData) {
        return this.api.get(`/getCardInfo/${_id}`, cardData)
    }

    editCard(_id, cardData) {
        return this.api.put(`/editCard/${_id}`, cardData)
    }

    deleteCard(_id, cardData) {
        return this.api.delete(`/deleteCard/${_id}`, cardData)
    }


}

const cardService = new CardService()

export default cardService


