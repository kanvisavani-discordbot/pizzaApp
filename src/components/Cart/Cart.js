import './Cart.css';
import Card from '../UI/Card';
import {menu_store} from "../Menu/menu_store";
import Footer from "../UI/Footer";
import React from "react";

export const Cart = () => {
    function clickAction(){
        const element = document.createElement("a");
        const file = new Blob(['Pizza Price: '+menu_store.pizzaPrice+ '\n'
                                        +'Pizza Tax: '+menu_store.pizzaTax+'\n'
                                        +'Delivery Charge: '+menu_store.pizzaDeliveryCharge+'\n'
                                        +'========================================'
                                        +'Total: '+menu_store.pizzaTotalPrice+'\n'
        ], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "order.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    return (
        <Card className="cart text-center p-5 font-weight-bold">
            <div className="row">
                <label className="col-sm-6">Price</label>
                <p className="col-sm-6">${menu_store.pizzaPrice}</p>
            </div>
            <div className="row">
                <label className="col-sm-6">Tax</label>
                <p className="col-sm-6">${menu_store.pizzaTax}</p>
            </div>
            <div className="row">
                <label className="col-sm-6">Delivery Charge</label>
                <p className="col-sm-6">${menu_store.pizzaDeliveryCharge}</p>
            </div>
            <hr/>
            <div className="row">
                <label className="col-sm-6">Total</label>
                <p className="col-sm-6">${menu_store.pizzaTotalPrice}</p>
            </div>
            <Footer to={''} title={'Print Bills'} clickHandler={clickAction}/>
        </Card>
    );
}

