import './Menu.css';
import Header from "../UI/Header";
import Card from "../UI/Card";
import React, {Component} from "react";
import MenuItem from "../Menu/MenuItem";

class Menu extends Component {

    componentDidMount() {
        let title= this.props.location.state.parent;
        this.setState({parent: title});
        {console.log(this.state.parent)}
    }

    render() {
    return (
        <div className="menu">
        <Header pageTitle="Menu"/>
            {this.props.items.map(item => <MenuItem key={item.id} title={item.title} imageUrl={item.imageUrl}/>)}
        </div>
    )}
}

export default Menu;
