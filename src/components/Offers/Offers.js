import './Offers.css';
import {Link} from 'react-router-dom';
import Header from '../UI/Header';
import {OfferItem} from './OfferItem';
import {offersData} from "../Data/Data";

export const Offers = () => {
    return (        <div className="offers">
        <Header pageTitle="Pizza"></Header>
    <div className="row">
        {offersData.map(item => <OfferItem key={item.id} title={item.title} imageUrl={item.imageUrl} price={item.price}/>)}
    </div>
    </div>);
}
