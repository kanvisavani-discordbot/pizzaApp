import './OfferItem.css';
import react, {Component} from "react";
import {Link} from 'react-router-dom';
import Card from '../UI/Card';

class OfferItem extends Component {
render() {
    const {imageUrl,title,price} =this.props;
    return (
        <div className="col-sm-4">
            <Card className='offer-item'>
                <Link to={{pathname: '/menu', state: {parent: title}}} className="card-body">
                    <img className="img-size"
                         src={imageUrl}
                         alt={title}/>
                </Link>
                <div className="card-footer"><span className="pizza-price font-weight-bold font-italic">{price}</span> {title}</div>
            </Card>
        </div>
    )}
}

export default OfferItem;
