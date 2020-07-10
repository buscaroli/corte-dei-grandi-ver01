import React from 'react'
import { connect } from 'react-redux'
import '../../styles/landing.css'
import CardHeader from './CardHeader'


class About extends React.Component {
    
    componentDidMount(){
        console.log('About page Mounted.')
        console.log(this.props.pics)
    }

    render() {
        console.log(this.props.pics)
        return(
            <div id="landing" className="ui container">
                <img id="imageTop" className="ui fluid image card" src={this.props.pics[0]} alt=""/>
                <div id="landing-text" className="ui one column grid">
                    <CardHeader header="Chi Siamo" text="Qui ad dolor Lorem in enim nisi reprehenderit incididunt consequat culpa esse. Reprehenderit minim nostrud proident tempor non amet non nostrud. Est incididunt laborum aliquip tempor sunt qui mollit fugiat. Veniam fugiat laboris anim sit. Dolor enim enim sit sit do sunt elit incididunt sunt occaecat. Aute aliqua dolor sit adipisicing dolor Lorem reprehenderit sunt cillum dolor excepteur. Pariatur ut in ad commodo officia. Exercitation laborum aute tempor laboris aute mollit reprehenderit quis et reprehenderit veniam. Qui nisi officia tempor tempor eu enim fugiat occaecat officia ea id minim. Sint adipisicing ut ex culpa ex nisi. Sit proident magna anim pariatur eu sit pariatur id enim consequat. Deserunt duis do do velit est. Laboris est labore qui adipisicing esse enim mollit. Sunt minim sit voluptate dolore amet consectetur dolore officia reprehenderit officia sunt. Id incididunt est officia labore occaecat cillum sit anim et. Cillum ea aute eu commodo voluptate ea ut qui enim velit cillum irure ex. Nisi excepteur ullamco nisi labore ex enim exercitation sunt proident. Sunt esse enim quis velit irure cupidatat amet ea sit dolor exercitation. Ut cupidatat do nulla aliquip veniam commodo ipsum exercitation. Id quis esse dolor nostrud do nostrud amet anim duis adipisicing nulla cillum nulla mollit. Non qui commodo veniam sit. Consequat minim ipsum nulla amet non proident minim reprehenderit sit et exercitation esse Lorem. Non anim ea elit tempor laboris sint id aliqua. Voluptate minim cillum sint duis exercitation commodo. Voluptate duis eu nulla cillum occaecat exercitation velit duis incididunt deserunt aute."/>
                    
                </div>
            </div>
        )
    }
        
}

const mapStateToProps = state => {
    return {
        pics: state.aboutPics
    }
}

export default connect(mapStateToProps)(About)
