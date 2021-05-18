import React from 'react';
import Navbar from './Navbar'
import Home from './Home'
import {
    BrowserRouter as Router, Route,
} from "react-router-dom";


const Homepage = () => {

    const header = () => {
        return (
            <header class="header" id="header">
                <div class="header_toggle"> <i class='bx bx-menu' id="header-toggle"></i> </div>
                <div class="header_img"> <img src="https://i.imgur.com/hczKIze.jpg" alt="" /> </div>
            </header>
        )
    }

    return (
        <body id='body-pd'>
            {header}
            <div className='container-fluid'>
                <div className='row'>
                    <Router>
                        <div className='col-2 px-0'>
                            <div id='sidebar-wrapper'>
                                <Navbar/>
                            </div>
                        </div>
                        <div className='col-10 px-0' id='content-wrapper'>
                            <Route path='/(home)' component={Home} />
                            <Route path='/resume' />
                            <Route path='/projects' />
                            <Route path='/about' />
                        </div>
                        {/* Brand Image */}
                        {/* Projects */}
                    </Router>
                </div>
            </div>
        </body>

    )
}
export default Homepage