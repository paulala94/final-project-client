import axios from 'axios'

class GameService {

   constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api/game`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    getRandomOGCard( cardData) {
        return this.api.get('/getRandomOGCard', cardData)
    }

}

const gameService = new GameService()

export default gameService

