import React from 'react'

// TODO IMPLEMENT STATE WITH REACT-REDUX IN APP.JS
const Pets = (frames) => {
    
    const renderFrames = (frames) => {
        console.log(frames)
        frames.map((frame) => {
            return (
                <div className="ui card">
                    <div className="image">
                        <img src={frame.pic} alt="" />
                    </div>
                    <div className="content">
                        <div className="description">
                            {frame.text}
                        </div>
                    </div>
                </div>
            )
        }) 
    }
    
    return(
        <div className="ui container">
            <h1>I nostri Cuccioli</h1>
            {renderFrames}
        </div>
    )    
}

export default Pets
