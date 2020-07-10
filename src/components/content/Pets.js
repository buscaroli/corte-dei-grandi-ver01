import React from 'react'
import { connect } from 'react-redux'
import '../../styles/pets.css'


class Pets extends React.Component {
    
    componentDidMount() {
        console.log('Pets is mounted.')
        console.log(this.props.petsList)
    }

    renderListOfPets() {
        return this.props.petsList.map(frame => {
            return (
                <div className="ui card" key={frame.pic}>
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
    
    render() {
        return (
            <div id="main" className="ui container">
                <h1 id="header-title">I nostri Cuccioli</h1>
                <div className="ui cards">
                    {this.renderListOfPets(this.props.petsList)}
                </div>
                
            </div>
        )    
    }
    
}

const mapStateToProps = state => {
    return {
        petsList: state.pets
    }
}

export default connect(mapStateToProps)(Pets)
