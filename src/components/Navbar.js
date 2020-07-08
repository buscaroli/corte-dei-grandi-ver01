import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div className="ui six item menu header">
            <Link to="/" className="item">Home</Link>
            <Link to="/photos" className="item">Foto</Link>
            <Link to="/pets" className="item">Cuccioli</Link>
            <Link to="/services" className="item">Servizi</Link>
            <Link to="/about" className="item">Chi Siamo</Link>
            <Link to="/contacts" className="item">Contatti</Link>
        </div>
        
    )            
}

export default Navbar
