import React, { useState } from 'react';
import Item from './Item'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'

const Navbar = () => {
    const [activeItem, setActiveItem] = useState(false)
    const [toggled, setToggled] = useState(false);
    const handleClick = (name) => {
        setActiveItem(name)
    }

    const handleToggle = (name) => {
        setToggled(name)
    }

    // // // TODO: Constants for map
    // // const [activeItem, setActiveItem] = useState(false)
    // // const [toggled, setToggled] = useState(false);
    // const handleClick = props.handleClick;
    // const handleToggle = props.handleToggle;
    // const activeItem = props.activeItem

    const navItems = ["home", "about", "resume", "projects", "contact"].map((key) => {
        return (
            <MenuItem className={`navItem ${activeItem === key ? 'active' : ''}`} key={key} onClick={() => handleClick(key)}>
                <Item name={key.charAt(0).toUpperCase().concat(key.substring(1))} toLink={`/${key}`} />
            </MenuItem>
        )
    });

    return (
        <div>
            <button className='btn btn-success mx-2' onClick={() => setToggled(!toggled)}>YO</button>
            <ProSidebar onToggle={handleToggle} breakPoint='lg' toggled={toggled} >
                <Menu>
                    {navItems}
                </Menu>
            </ProSidebar>

        </div>
        // <nav className='navbar navbar-default'>
        //     <div className='container-fluid'>
        //         <ul>
        //             {navItems}
        //         </ul>
        //     </div>

        // </nav>
    );
}
export default Navbar