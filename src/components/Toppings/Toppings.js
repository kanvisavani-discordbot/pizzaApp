import './Toppings.css';
import {ToppingItem} from './ToppingItem';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import React from "react";
import {toppingsData} from "../Data/Data";

export const Toppings = () => {

    return (<div className="toppings">
        <Header pageTitle="Toppings"/>
        {toppingsData.map(item => <ToppingItem key={item.id} index={item.id} title={item.title} imageUrl={item.imageUrl} count={item.count}/>)}
        <Footer componentName={'/menu'} title={'Save&Continue'}/>
    </div>);
}
