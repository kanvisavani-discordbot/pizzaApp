import './Bevrages.css';
import BevrageItem from './BevrageItem';
import Header from '../UI/Header';
import Footer from '../UI/Footer';

const Bevrages = (props) => {

    return (<div className="bevrages">
        <Header pageTitle="bevrages"/>
        {props.items.map(item => <BevrageItem key={item.id} title={item.title} imageUrl={item.imageUrl} count={item.count}/>)}
    <Footer/>
    </div>);
}

export default Bevrages;
