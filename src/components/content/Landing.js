import React from 'react'
import { connect } from 'react-redux'
// import imageTop from '../../assets/landing-top.jpg'
import '../../styles/landing.css'
import CardHeader from './CardHeader'


class Landing extends React.Component {
    
    componentDidMount(){
        console.log('Landing Mounted.')
        console.log(this.props.pics)
    }

    render() {
        console.log(this.props.pics)
        return(
            <div id="landing" className="ui container">
                <img id="imageTop" className="ui fluid image card" src={this.props.pics[0]} alt=""/>
                <div id="landing-text" className="ui two column grid">
                    <CardHeader header="Titolo Uno" text="Qui ad dolor Lorem in enim nisi reprehenderit incididunt consequat culpa esse. Reprehenderit minim nostrud proident tempor non amet non nostrud. Est incididunt laborum aliquip tempor sunt qui mollit fugiat. Veniam fugiat laboris anim sit. Dolor enim enim sit sit do sunt elit incididunt sunt occaecat. Aute aliqua dolor sit adipisicing dolor Lorem reprehenderit sunt cillum dolor excepteur. Pariatur ut in ad commodo officia. Exercitation laborum aute tempor laboris aute mollit reprehenderit quis et reprehenderit veniam. Qui nisi officia tempor tempor eu enim fugiat occaecat officia ea id minim. Sint adipisicing ut ex culpa ex nisi. Sit proident magna anim pariatur eu sit pariatur id enim consequat. Deserunt duis do do velit est."/>
                    <CardHeader header="Titolo Due" text="Qui sunt qui fugiat aliquip fugiat. Dolor aliquip labore deserunt id consectetur. Nulla ex et ad et sint. Velit consectetur deserunt mollit voluptate aliqua commodo fugiat minim pariatur. Culpa consectetur ad veniam officia mollit ad mollit veniam amet. Incididunt elit aute duis ut. Exercitation nostrud dolor reprehenderit do ex adipisicing magna nostrud sit. Dolore ex nulla sit est elit cupidatat mollit aliqua eiusmod ea consequat mollit. Quis ullamco enim irure nostrud reprehenderit. Occaecat nostrud sint incididunt nostrud. Quis ut ea consequat commodo anim velit laborum sit commodo consectetur consequat proident ad aliqua. Voluptate anim minim ipsum fugiat nulla culpa esse labore. Aute adipisicing cillum mollit occaecat id id duis elit non duis excepteur ad commodo irure. Proident anim laborum eiusmod proident exercitation elit esse sint."/>            
                </div>
            </div>
        )
    }
        
}

const mapStateToProps = state => {
    return {
        pics: state.landing
    }
}

export default connect(mapStateToProps)(Landing)
