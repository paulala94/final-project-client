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

    getCards(cardData) {
        return this.api.get('/getAllCards', cardData)
    }

    editCard(cardData) {
        return this.api.put('/editCard', cardData)
    }


}

const cardService = new CardService()

export default cardService


