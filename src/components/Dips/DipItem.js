import React, {useState} from 'react';
import './DipItem.css';
import Card from '../UI/Card';
import {observer} from "mobx-react-lite";
import {menu_store} from "../Menu/menu_store";

export const DipItem = observer((props) => {

    const {imageUrl,title, index}=props;
    const [count, setCount] = useState(menu_store.pizzaDips[index]);

    const handlerIncrement = () => {
        setCount( count + 1);
        menu_store.pizzaDips[index]=count+1;
    }

    const handlerDecrement = () => {
        setCount(count == 0 ? 0 :count - 1);
        menu_store.pizzaDips[index]=count == 0 ? 0 :menu_store.pizzaDips[index] - 1;
    }

    return (
        <Card className='dip-item'>
            <div className="card-horizontal">
                <div className="img-square-wrapper">
                    <img className="img-size"
                         src={imageUrl}
                         alt={title}/>
                </div>
                <div className="card-body">
                    <div className="row p-4">
                    <h4 className="card-title col-sm-9">{title}</h4>
                    <button className="btn btn-success btn-sm col-sm-1" onClick={handlerDecrement}>-</button>
                    <p className="card-text col-sm-1 text-center">{count}</p>
                    <button className="btn btn-success btn-sm col-sm-1" onClick={handlerIncrement}>+</button>
                    </div>
                </div>
            </div>
        </Card>
    );
})
