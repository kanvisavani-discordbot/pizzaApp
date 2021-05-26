import './MenuItem.css';
import {Link} from 'react-router-dom';
import React from 'react';

export const MenuItem = (props) => {

    const {imageUrl,title}=props;

    return (
        <div className="menuItem text-center">
            <img className="img-bar"
                 src={imageUrl}
                 alt={title}/>
            <Link to={{pathname:title}}>{title}</Link>
            <hr/>
        </div>
    );
}
