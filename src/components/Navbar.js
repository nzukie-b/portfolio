import React from 'react'
import Item from 'item'

const Navbar = () => {

    return (
        <nav>
            <ul>
                <Item name="Home" toLink="/" ></Item>
                <Item name="About" toLink="/about" ></Item>
                <Item name="Education" toLink="/education"></Item>
                <Item name="Projects" toLink="/projects"></Item>
                <Item name="Contact" toLink="/contact"></Item>
            </ul>
        </nav>
    );
}
export default Navbar