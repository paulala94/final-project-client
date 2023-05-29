import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import authService from '../../services/authService.js'
import { useNavigate } from "react-router-dom"
import './SignupForm.css'



const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
        avatar: '',
        description: '',
    })

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .signup(signupData)
            .then(({ data }) => navigate('/'))
            .catch(err => console.log(err))
    }


    const { username, password, email, avatar, description } = signupData

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label >Nombre de usuario</Form.Label>
                <Form.Control type="text" value={username} onChange={handleInputChange} name="username" className="inputHover" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label >Email</Form.Label>
                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" className="inputHover" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label >Contraseña</Form.Label>
                <Form.Control type="password" value={password} onChange={handleInputChange} name="password" className="inputHover" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="avatar">
                <Form.Label >Foto de perfil</Form.Label>
                {/* <Form.Control type="email" value={avatar} onChange={handleInputChange} name="avatar" /> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label >Descripción</Form.Label>
                <Form.Control type="text" value={description} onChange={handleInputChange} name="description" className="inputHover" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Registrarme</Button>
            </div>

        </Form>
    )
}

export default SignupForm