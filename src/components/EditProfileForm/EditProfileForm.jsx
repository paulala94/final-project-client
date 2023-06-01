import { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import userService from '../../services/userService.js'
import { useNavigate, useParams } from "react-router-dom"
import uploadServices from "../../services/uploadService.js"
// import './EditProfileForm.css'

const EditProfileForm = () => {

    const [editData, setEditData] = useState({
        username: '',
        email: '',
        password: '',
        image: '',
        description: '',
    })

    const navigate = useNavigate()

    const { _id } = useParams()

    useEffect(() => {
        getUser(_id)
    }, [_id])

    const getUser = () => {
        
        userService
            .getUser(_id)
            .then(({ data }) => setEditData(data))
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        setEditData({ ...editData, [name]: value })
    }

    const handleSubmit = e => {

        e.preventDefault()

        userService
            .edit(_id, editData)
            .then(() => navigate('/perfil'))
            .catch(err => console.log(err))
    }

    const [loadingImage, setLoadingImage] = useState(false)

    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('image', e.target.files[0])

        uploadServices
            .uploadImage(formData)
            .then(res => {
                setEditData({ ...editData, image: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }

    const { username, image, description } = editData



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
            <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Cargando imagen...' : 'Editar'}</Button>

        </Form>
    )
}

export default EditProfileForm