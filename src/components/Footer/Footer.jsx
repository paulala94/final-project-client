import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'


const Footer = () => {
    return (
        <footer className="footer">
            <p>Desarrollado por <Link to='/nosotras'>Sacabó Team</Link> </p>
        </footer>
    )
}

export default Footer