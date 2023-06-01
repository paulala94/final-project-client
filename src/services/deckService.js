import axios from 'axios'

class DeckService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api/deck`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    create(deckData) {
        return this.api.post('/createDeck', deckData)
    }

    getDecks(deckData) {
        return this.api.get('/getAllDecks', deckData)
    }


}

const deckService = new DeckService()

export default deckService


