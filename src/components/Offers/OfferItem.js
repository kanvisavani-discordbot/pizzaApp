import './OfferItem.css';
import react, {Component} from "react";
import {Link, useHistory} from 'react-router-dom';
import Card from '../UI/Card';
import {observer} from "mobx-react-lite";
import {menu_store} from "../Menu/menu_store";

export const OfferItem = observer((props) => {
    const {imageUrl,title,price} = props;
    return (
        <div className="col-sm-4">
            <Card className='offer-item'>
                <Link onClick={()=>
                                {
                                    menu_store.pizzaItemInitialize();
                                    menu_store.pizzaTitle = title;
                                 menu_store.pizzaPrice=price;
                                }
                            } to="/menu" className="card-body">
                    <img className="img-size"
                         src={imageUrl}
                         alt={title}/>
                </Link>
                <div className="card-footer"><span className="pizza-price font-weight-bold font-italic">{price}</span> {title}</div>
            </Card>
        </div>
    )
})

