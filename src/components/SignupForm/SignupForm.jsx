import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import authService from '../../services/authService.js'
import uploadServices from "../../services/uploadService.js"
import './SignupForm.css'



const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
        image: '',
        description: '',
    })

    const [loadingImage, setLoadingImage] = useState(false)

    const { username, password, email, description } = signupData

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .signup(signupData)
            .then(() => navigate('/login'))
            .catch(err => console.log(err))
    }

    const handleFileUpload = e => {
        setLoadingImage(true)

        const formData = new FormData()
        formData.append('image', e.target.files[0])

        uploadServices
            .uploadImage(formData)
            .then(res => {
                setSignupData({ ...signupData, image: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }

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

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Foto de perfil</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label >Descripción</Form.Label>
                <Form.Control type="text" value={description} onChange={handleInputChange} name="description" className="inputHover" />
            </Form.Group>

            <div className="d-grid">
                <Button className="edit-btn" type="submit" disabled={loadingImage}>{loadingImage ? 'Cargando imagen...' : 'Registrarme'}</Button>
            </div>

        </Form>
    )
}

export default SignupForm