import './Toppings.css';
import ToppingItem from './ToppingItem';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import React from "react";

/*const Toppings = observer(() => {
    return <div className="toppings">
        {data.toppingsData.map((item, i) => {
            <div className="bg-header">{item.type}</div>
            {
                item.ingrediants.map((ingrediant, i) => {
                    <ToppingItem title={ingrediant.title} imageUrl={ingrediant.imageUrl}/>
                })
            }
        })}
    </div>
})*/

const Toppings = (props) => {

    return (<div className="toppings">
        <Header pageTitle="Toppings"/>
        {props.items.map(item => <ToppingItem key={item.id} title={item.title} imageUrl={item.imageUrl} count={item.count}/>)}
        <footer className="row fixed-bottom shadow-sm p-3 mb-5 bg-white rounded">
            <div className="col-sm-4"/>
            <button className="btn-success col-sm-4" onClick={()=>{console.log('hi')}}>Save&Continue</button>
        </footer>
    </div>);
}

export default Toppings;
