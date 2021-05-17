import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Item = props => {
    const [toLink, setToLink] = useState(props.toLink)
    const [name, setName] = useState(props.name)
    const activeItem = props.activeItem



    // const handleClick = name => {
    //     let items = document.querySelectorAll('.active')
    //     console.log(items)
    //     items = Array.from(items).forEach( el => el.classList.remove('active'))
    //     console.log(items)
        
    //     setActive(!active);
    //     console.log(active)
    // }


    return (
            <Link to={toLink}>
                {name}
            </Link>
    )
}

export default Item