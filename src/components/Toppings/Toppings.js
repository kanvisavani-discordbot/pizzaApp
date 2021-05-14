import './Toppings.css';
import ToppingItem from './ToppingItem';
import Header from '../UI/Header';
import Footer from '../UI/Footer';

/*const Toppings = observer(() => {
    return <div className="toppings">
        {data.toppingsData.map((item, i) => {
            <div className="bg-header">{item.type}</div>
            {
                item.ingrediants.map((ingrediant, i) => {
                    <ToppingItem title={ingrediant.title} imageUrl={ingrediant.imageUrl}/>
                })
            }
        })}
    </div>
})*/

const Toppings = (props) => {

    return (<div className="toppings">
        <Header pageTitle="Toppings"/>
        {props.items.map(item => <ToppingItem key={item.id} title={item.title} imageUrl={item.imageUrl} count={item.count}/>)}
        <Footer/>
    </div>);
}

export default Toppings;
