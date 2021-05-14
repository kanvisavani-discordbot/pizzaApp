import './Dips.css';
import DipItem from './DipItem';
import Header from '../UI/Header';
import Footer from '../UI/Footer';

const Dips = (props) => {

    return (<div className="dips">
        <Header pageTitle="Dips"/>
        {props.items.map(item => <DipItem key={item.id} title={item.title} imageUrl={item.imageUrl} count={item.count}/>)}
        <Footer/>
    </div>);
}

export default Dips;
