import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div id="navbar" className="ui six item menu">
            <Link to="/" className="item header">Home</Link>
            <Link to="/photos" className="item header">Foto</Link>
            <Link to="/pets" className="item header">Cuccioli</Link>
            <Link to="/services" className="item header">Servizi</Link>
            <Link to="/about" className="item header">Chi Siamo</Link>
            <Link to="/contacts" className="item header">Contatti</Link>
        </div>
        
    )            
}

export default Navbar
