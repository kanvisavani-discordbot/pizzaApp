import React, {useState} from 'react';
import './SizeItem.css';
import Card from '../UI/Card';

const SizeItem = (props) => {

    const {imageUrl,title}=props;
    const [size, setSize] = useState(props.size);

    const onSizeChanged = (e) => {
        //console.log(e.currentTarget.value)
        setSize(e.currentTarget.value);
    }

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
                    <h4 className="card-title col-sm-11">{title}</h4>
                        <input className="col-sm-1" type="radio" value={title} name="Size" onChange={onSizeChanged} />
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default SizeItem;
