import React from 'react'
import imageTop from '../../assets/landing-top.jpg'
import '../../styles/landing.css'
import CardHeader from './CardHeader'


const Landing = () => {
    return(
        <div id="landing" className="ui container">
            <img id="imageTop" className="ui fluid image card" src={imageTop} alt=""/>
            <div className="ui two column grid">
                <CardHeader header="Titolo Uno" text="Qui ad dolor Lorem in enim nisi reprehenderit incididunt consequat culpa esse. Reprehenderit minim nostrud proident tempor non amet non nostrud. Est incididunt laborum aliquip tempor sunt qui mollit fugiat. Veniam fugiat laboris anim sit. Dolor enim enim sit sit do sunt elit incididunt sunt occaecat."/>
                <CardHeader header="Titolo Due" text="Pariatur fugiat laboris pariatur officia labore ut qui esse labore. Magna officia amet sit excepteur commodo aute ad ad laborum mollit. Ut ad ut nulla duis tempor enim."/>            
            </div>
        </div>
    )    
}

export default Landing
