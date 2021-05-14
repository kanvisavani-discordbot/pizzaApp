import './MenuItem.css';
import {Link} from 'react-router-dom';
import React from 'react';
import {FaIcons} from 'react-icons/fa';

const MenuItem = (props) => {

    const {imageUrl,title}=props;

    return (
        <div className="menuItem text-center">
            <img className="img-bar"
                 src={imageUrl}
                 alt={title}/>
            <Link to={title}>{title}</Link>
            <hr/>
        </div>
    );
}

export default MenuItem;
