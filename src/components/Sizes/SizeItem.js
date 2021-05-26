import React, {useState} from 'react';
import './SizeItem.css';
import Card from '../UI/Card';
import {observer} from "mobx-react-lite";
import {sizesData} from "../Data/Data";
import {menu_store} from "../Menu/menu_store";

export const SizeItem = observer((props) => {

    return (
        <Card className='size-item'>
            <div className="card-horizontal">
                <div className="img-square-wrapper">
                    <img className="img-size"
                         src={props.imageUrl}
                         alt={props.title}/>
                </div>
                <div className="card-body">
                    <div className="row p-4">
                    <h4 className="card-title col-sm-11">{props.title}</h4>
                        <input className="col-sm-1" type="radio" value={props.title} name="Size" checked = {props.title === menu_store.pizzaSize} onChange={()=>menu_store.pizzaSize=props.title} />
                    </div>
                </div>
            </div>
        </Card>
    )
})
