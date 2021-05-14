import React, {useState} from 'react';
import './DipItem.css';
import Card from '../UI/Card';

const DipItem = (props) => {

    const [count, setCount] = useState(props.count);
    const {imageUrl,title}=props;

    const handlerIncrement = () => {
        setCount( count + 1);
    }

    const handlerDecrement = () => {
        setCount(count == 0 ? 0 :count - 1);
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
}

export default DipItem;
