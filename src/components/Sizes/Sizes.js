import './Sizes.css';
import React from 'react';
import SizeItem from './SizeItem';
import Header from '../UI/Header';
import Footer from '../UI/Footer';

const Sizes = (props)=> {

    const selectSize = (getSize) => {
        console.log(getSize);
    }

    return (<div className="sizes">
        <Header pageTitle="sizes"/>
        {props.items.map(item => <SizeItem key={item.id} title={item.title} imageUrl={item.imageUrl} count={item.count}/>)}

        <Footer onClick={selectSize}/>
    </div>)
}

export default Sizes;
