import React from 'react'


const CardHeader = (props) => {
    return (
        <div className="column cardLeft">
            <div className="ui fluid card">
                <div className="content">
                    <div className="header">{props.header}</div>
                    <div className="description">{props.text}</div>
                </div>
            </div>  
        </div>
    )
}

export default CardHeader