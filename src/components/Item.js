import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Item = props => {
    const [toLink, setToLink] = useState('')
    const [name, setName] = useState('')
    const [active, setActive] = useState(false)



    const handleClick = name => {
        if (active) {
            document.getElementById(name).classList.remove('active');
        }
        setActive(!active);
    }


    return (
        <li id={name}>
            <Link to={toLink} className={active ? 'active' : ''} onClick={handleClick}>
                {name}
            </Link>
        </li>
    )
}

export default Item