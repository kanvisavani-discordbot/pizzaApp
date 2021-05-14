import './Sizes.css';
import SizeItem from './SizeItem';
import Header from '../UI/Header';
import Footer from '../UI/Footer';

const Sizes = (props) => {

    return (<div className="sizes">
        <Header pageTitle="sizes"/>
        {props.items.map(item => <SizeItem key={item.id} title={item.title} imageUrl={item.imageUrl} count={item.count}/>)}
        <Footer/>
    </div>);
}

export default Sizes;
