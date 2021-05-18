import React from 'react';
import { Link } from 'react-router-dom';

const Item = props => {
    const toLink = props.toLink;
    const name = props.name;
    return (
        <Link to={toLink}>
            {name}
        </Link>
    )
}

export default Item