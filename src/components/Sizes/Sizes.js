import './Sizes.css';
import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {SizeItem} from './SizeItem';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import {observer} from "mobx-react-lite";
import {sizesData} from "../Data/Data";

export const Sizes = observer(() =>  {
        return (<div className="sizes">
            <Header pageTitle="sizes"/>
            {sizesData.map(item => <SizeItem key={item.id} title={item.title} imageUrl={item.imageUrl}
                                               count={item.count}/>)}

            <Footer componentName={'/menu'} title={'Save&Continue'}/>
        </div>)
})
