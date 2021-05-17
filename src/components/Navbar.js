import React, { useState } from 'react';
import Item from './Item'

const Navbar = () => {
    // TODO: Constants
    const [activeItem, setActiveItem] = useState(null)
    const handleClick = (name) => {
        setActiveItem(name)

    }
    const navItems = ["home", "about", "education", "projects", "contact"].map((key) => {
        return (
            <li className={`navItem ${activeItem === key ? 'active' : ''}`} key={key} onClick={() => handleClick(key)}>
                <Item name={key} toLink={`/${key}`}/>
            </li>
        )
    });



    return (
        <nav>
            <ul>
                {navItems}
                {/* <Item key={"Home"} name="Home" toLink="/" activeItem={activeItem} handleClick={handleClick} ></Item>
                <Item key={"About"} name="About" toLink="/about" ></Item>
                <Item key={"Education"} name="Education" toLink="/education"></Item>
                <Item key={"Projects"} name="Projects" toLink="/projects"></Item>
                <Item key={"Contact"} name="Contact" toLink="/contact"></Item> */}
            </ul>
        </nav>
    );
}
export default Navbar