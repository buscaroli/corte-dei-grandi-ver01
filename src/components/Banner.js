import React from 'react'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
import '../styles/banner.css'


const Banner = () => {
    return(
        <div id="banner" className="ui container grid">
            <div className="ui four wide column">
                <img id="logo" class="ui small image" src={logo} alt="logo"/>
            </div>
            <div className="twelve wide column">
                <h1 id="title" className="ui header">
                    La Corte dei Grandi
                </h1>
            </div>  
        </div>
    )    
}

export default Banner
