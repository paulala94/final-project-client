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

    getAllDecks(deckData) {
        return this.api.get('/getAllDecks', deckData)
    }
    
    getDeckInfo(_id, deckData) {
        return this.api.get(`/getDeckInfo/${_id}`, deckData)
    }
    
    editDeck(_id, deckData) {
        return this.api.put(`/editDeck/${_id}`, deckData)
    }
    
    deleteDeck(_id, deckData) {
        return this.api.delete(`/deleteDeck/${_id}`, deckData)
    }
}

const deckService = new DeckService()

export default deckService


