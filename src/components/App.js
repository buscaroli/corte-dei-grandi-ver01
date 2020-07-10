import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Banner from './Banner'
import Footer from './Footer'
import Landing from './content/Landing'
import About from './content/About'
import Contacts from './content/Contacts'
import Pets from './content/Pets'
import Photos from './content/Photos'
import Services from './content/Services'


class App extends React.Component {
    
    render() {
        return(
            <div>
                <BrowserRouter>
                    <Banner />
                    <Navbar />
                    <Route path='/' exact component={Landing} />
                    <Route path='/about' exact component={About} />
                    <Route path='/contacts' exact component={Contacts} />
                    <Route path='/pets' exact component={Pets} />
                    <Route path='/photos' exact component={Photos} />
                    <Route path='/services' exact component={Services} />
                    <Footer />
                </BrowserRouter>
            </div>
        )
    }
    
}


export default App