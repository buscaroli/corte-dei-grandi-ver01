import React from 'react'
import logo from '../assets/dog-logo-small.png'
import '../styles/banner.css'


const Banner = () => {
    // return(
    //     <div id="banner" className="ui container grid">
    //         <div className="ui four wide column">
    //             <img id="logo" className="ui image" src={logo} alt="logo"/>
    //         </div>
    //         <div className="twelve wide column">
    //             <h1 id="title" className="ui header">
    //                 La Corte dei Grandi
    //             </h1>
    //         </div>  
    //     </div>
    // )    
    return(
        <div id="banner" className="ui items">
            <div id="wrapper" className="item">
                <div id="one" className="ui small image">
                    <img id="logo" src={logo} alt="logo" />
                </div>
                <div id="two" className="middle aligned fluid content">
                    <h1 id="title" className="header">
                        La Corte dei Grandi
                    </h1>
                </div>
            </div>
        </div>
           
    )    
}

export default Banner
