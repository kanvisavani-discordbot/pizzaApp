import './Cart.css';
import Card from '../UI/Card';
import {menu_store} from "../Menu/menu_store";
import Footer from "../UI/Footer";
import React from "react";

export const Cart = () => {
    return (
        <Card className="cart text-center p-5 font-weight-bold">
            <div className="row">
                <label className="col-sm-6">Price</label>
                <p className="col-sm-6">{menu_store.pizzaPrice}</p>
            </div>
            <div className="row">
                <label className="col-sm-6">Tax</label>
                <p className="col-sm-6">{menu_store.pizzaTax}</p>
            </div>
            <div className="row">
                <label className="col-sm-6">Delivery Charge</label>
                <p className="col-sm-6">{menu_store.pizzaDeliveryCharge}</p>
            </div>
            <hr/>
            <div className="row">
                <label className="col-sm-6">Total</label>
                <p className="col-sm-6">{menu_store.pizzaTotalPrice}</p>
            </div>
            <Footer title={'Print Bills'}/>
        </Card>
    );
}

