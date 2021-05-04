import React from 'react'


const NavBar = () => {
    var imageStyle = {
        width: '30px',
        height: '30px'
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src="https://ui-ex.com/images/pokeball-transparent-8-bit.png" alt="Pokémon" style={imageStyle}></img>
            <a className="navbar-brand">SOME IMAGE w/ text</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                {/* Smooth Scroll to sections */}
                    {/* <Link className="nav-item nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                    <Link className="nav-item nav-link" to="/search">Search</Link>
                    <Link className="nav-item nav-link" to="/training">Training</Link> */}
                </div>
            </div>
        </nav>
    )
}

export default NavBar