import { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import userService from '../../services/userService.js'
import { useNavigate, useParams } from "react-router-dom"
import uploadServices from "../../services/uploadService.js"
// import './EditProfileForm.css'

const EditProfileForm = () => {

    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        image: '',
        description: '',
    })

    const [loadingImage, setLoadingImage] = useState(false)

    const navigate = useNavigate()

    const { _id } = useParams()

    const { username, image, description } = userData

    useEffect(() => {
        getUser(_id)
    }, [_id])

    const getUser = () => {
        userService
            .getUser(_id)
            .then(({ data }) => setUserData(data))
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        userService
            .edit(_id, userData)
            .then(() => navigate('/perfil'))
            .catch(err => console.log(err))
    }

    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()

        formData.append('image', e.target.files[0])

        uploadServices
            .uploadImage(formData)
            .then(res => {
                setUserData({ ...userData, image: res.data.cloudinary_url })
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

            <Form.Group className="mb-3" controlId="description">
                <Form.Label >Descripción</Form.Label>
                <Form.Control type="text" value={description} onChange={handleInputChange} name="description" className="inputHover" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Imagen (URL)</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>

            <div className="d-grid">
            </div>
            <div className="edit-profile-bt" style={{ color: '#fffff' }} type="submit" disabled={loadingImage}>{loadingImage ? 'Cargando imagen...' : 'Editar'}</div>

        </Form>
    )
}

export default EditProfileForm