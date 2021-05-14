import React, {useState} from 'react';
import './SizeItem.css';
import Card from '../UI/Card';

const SizeItem = (props) => {

    const [count, setCount] = useState(props.count);
    const {imageUrl,title}=props;

    return (
        <Card className='size-item'>
            <div className="card-horizontal">
                <div className="img-square-wrapper">
                    <img className="img-size"
                         src={imageUrl}
                         alt={title}/>
                </div>
                <div className="card-body">
                    <div className="row p-4">
                    <h4 className="card-title col-sm-9">{title}</h4>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default SizeItem;
