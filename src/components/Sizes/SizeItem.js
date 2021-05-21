import React, {useState} from 'react';
import './SizeItem.css';
import Card from '../UI/Card';

class SizeItem extends React.Component {

    onSizeChanged = (event) => {
        this.props.parentCallback(event.target.value);
    }

    render(){
    return (
        <Card className='size-item'>
            <div className="card-horizontal">
                <div className="img-square-wrapper">
                    <img className="img-size"
                         src={this.props.imageUrl}
                         alt={this.props.title}/>
                </div>
                <div className="card-body">
                    <div className="row p-4">
                    <h4 className="card-title col-sm-11">{this.props.title}</h4>
                        <input className="col-sm-1" type="radio" value={this.props.title} name="Size" onChange={this.onSizeChanged} />
                    </div>
                </div>
            </div>
        </Card>
    )}
}

export default SizeItem;
