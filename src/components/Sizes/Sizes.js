import './Sizes.css';
import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import SizeItem from './SizeItem';
import Header from '../UI/Header';
import Footer from '../UI/Footer';

class Sizes extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            pizzaSize: null
        }
    }

    handleCallback = (sizeOfPizza) =>{
        this.setState({pizzaSize: sizeOfPizza})
    }

    render() {
        const {pizzaSize} = this.state;
        return (<div className="sizes">
            <Header pageTitle="sizes"/>
            {/*{console.log('sizes '+this.location.parent)}*/}
            {this.props.items.map(item => <SizeItem key={item.id} title={item.title} imageUrl={item.imageUrl}
                                               count={item.count} parentCallback = {this.handleCallback}/>)}

            <Footer clickHandler={()=>{console.log(pizzaSize)}} title={'Save&Continue'}/>
        </div>)
    }
}

export default Sizes;
