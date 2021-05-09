import React from 'react'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: false }

        handleClick = () => {
            this.setState((state) => ({
                active: !(state.active)
            }));
        }

    };
    render() {
        return (
            <div className='wrapper'>
                <div id="content">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button type="button" id="sidebarCollapse"
                                className={`btn btn-info ${this.state.active ? "active" : ""}`} onClick={this.handleClick} >
                                <i className="fas fa-align-left"></i>
                                <span>Toggle Sidebar</span>
                            </button>

                        </div>
                    </nav>
                </div>
                <nav id='sidebar'>
                    <div className="sidebar-header">
                        <h3>ＮＺＵＫＩＥ</h3>
                    </div>

                    <ul className="list-unstyled components">
                        <li className="active">
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <a href="#">Home 1</a>
                                </li>
                                <li>
                                    <a href="#">Home 2</a>
                                </li>
                                <li>
                                    <a href="#">Home 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                            <ul className="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <a href="#">Page 1</a>
                                </li>
                                <li>
                                    <a href="#">Page 2</a>
                                </li>
                                <li>
                                    <a href="#">Page 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar