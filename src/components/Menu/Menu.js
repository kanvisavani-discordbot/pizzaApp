import './Menu.css';
import Header from "../UI/Header";
import Card from "../UI/Card";
import React, {Component} from "react";
import {MenuItem} from "../Menu/MenuItem";
import { useLocation } from "react-router-dom";
import {menuData} from "../Data/Data";
import {dipsData} from "../Data/Data";
import {menu_store} from "./menu_store";
import {observer} from "mobx-react-lite";
import Footer from "../UI/Footer";

export const Menu = observer(()=> {
    function clickHandler(){
        console.log('clicked!!')
        menu_store.pizzaPriceCalculation()
    }
    return (
        <div className="menu">
        <Header pageTitle="Menu"/>
            {menuData
                .filter(item => (menu_store.pizzaTitle.toLowerCase().includes(item.title.toLowerCase()) || item.priority === 'default'))
                .map(filteredItem => <MenuItem key={filteredItem.id} title={filteredItem.title} imageUrl={filteredItem.imageUrl}/>)
            }
            <Footer componentName={'/cart'} onClick={clickHandler()} title={'Add to Cart'}/>

        </div>
    )
})
