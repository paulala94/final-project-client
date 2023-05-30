import axios from 'axios'

class UserService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api/user`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    edit(_id, userData) {
  
        return this.api.put(`/edit/${_id}`, userData)
    }

    getUser(_id) {
        return this.api.get(`/${_id}`)
    }

    deleteUser(_id) {
        return this.api.delete(`/delete/${_id}`)
    }

 
    // login(userData) {
    //     return this.api.post('/login', userData)
    // }


    // verify(token) {
    //     return this.api.get('/verify', { headers: { Authorization: `Bearer ${token}` } })
    // }
}

const userService = new UserService()

export default userService