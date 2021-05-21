import './Menu.css';
import Header from "../UI/Header";
import Card from "../UI/Card";
import React, {Component} from "react";
import MenuItem from "../Menu/MenuItem";
import { useLocation } from "react-router-dom";

const Menu = (props)=> {
    const { parent } = useLocation();

    return (
        <div className="menu">
        <Header pageTitle="Menu"/>
            {console.log('Menu '+parent.title)}
            {props.items
                .filter(item => (parent.title.toLowerCase().includes(item.title.toLowerCase()) || item.priority === 'default'))
                .map(filteredItem => <MenuItem parentTitle={parent.title} key={filteredItem.id} title={filteredItem.title} imageUrl={filteredItem.imageUrl}/>)}
        </div>
    )
}


export default Menu;
