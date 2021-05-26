import './Dips.css';
import {DipItem} from './DipItem';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import {dipsData} from "../Data/Data";
import React from "react";
import {menu_store} from "../Menu/menu_store";

export const Dips = () => {

    return (<div className="dips">
        <Header pageTitle="Dips"/>
        {dipsData.map(item => <DipItem key={item.id} index={item.id} title={item.title} imageUrl={item.imageUrl}/>)}
        <Footer componentName={'/menu'} title={'Save&Continue'}/>
        <Footer/>
    </div>);
}
