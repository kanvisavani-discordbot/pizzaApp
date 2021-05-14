import './Menu.css';
import Header from "../UI/Header";
import Card from "../UI/Card";
import React, {Component} from "react";
import MenuItem from "../Menu/MenuItem";

class Menu extends Component {

    render() {
    return (
        <div className="menu">
        <Header pageTitle="Menu"/>
            {this.props.items.map(item => <MenuItem key={item.id} title={item.title} imageUrl={item.imageUrl}/>)}
        </div>
    )}
}

export default Menu;

