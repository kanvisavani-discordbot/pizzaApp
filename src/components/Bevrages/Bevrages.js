import './Bevrages.css';
import {BevrageItem} from './BevrageItem';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import {bevragesData} from "../Data/Data";
import React from "react";

export const Bevrages = () => {

    return (<div className="bevrages">
        <Header pageTitle="bevrages"/>
        {bevragesData.map(item => <BevrageItem key={item.id} index={item.id} title={item.title} imageUrl={item.imageUrl} count={item.count}/>)}
        <Footer componentName={'/menu'} title={'Save&Continue'}/>
    <Footer/>
    </div>);
}

