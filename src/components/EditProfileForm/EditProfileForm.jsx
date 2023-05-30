import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import userService from '../../services/userService.js'
import { useNavigate, useParams } from "react-router-dom"
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

    const handleInputChange = e => {
        const { value, name } = e.target
        setEditData({ ...editData, [name]: value })
    }

    const handleSubmit = e => {

        e.preventDefault()
        userService
            .edit(_id, editData)
            .then(({ data }) => navigate('/perfil'))
            .catch(err => console.log(err))
    }


    const { username, password, email, image, description } = editData

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label >Nombre de usuario</Form.Label>
                <Form.Control type="text" value={username} onChange={handleInputChange} name="username" className="inputHover" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label >Foto de perfil</Form.Label>
                {/* <Form.Control type="email" value={image} onChange={handleInputChange} name="image" /> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label >Descripción</Form.Label>
                <Form.Control type="text" value={description} onChange={handleInputChange} name="description" className="inputHover" />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="image">
                <Form.Label>Imagen (URL)</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group> */}

            <div className="d-grid">
            </div>
            <Button variant="dark" type="submit">Editar</Button>

        </Form>
    )
}

export default EditProfileForm