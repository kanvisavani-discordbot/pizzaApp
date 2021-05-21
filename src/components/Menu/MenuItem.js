import './MenuItem.css';
import {Link} from 'react-router-dom';
import React from 'react';

const MenuItem = (props) => {

    const {imageUrl,title,parentTitle}=props;

    return (
        <div className="menuItem text-center">
            <img className="img-bar"
                 src={imageUrl}
                 alt={title}/>
            {console.log('menuItem '+parentTitle)}
            <Link to={{pathname:title,parent: parentTitle}}>{title}</Link>
            <hr/>
        </div>
    );
}

export default MenuItem;
