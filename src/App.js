import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Toppings from './components/Toppings/Toppings';
import {toppingsData} from './components/Data/Data';
import Dips from './components/Dips/Dips';
import {dipsData} from './components/Data/Data';
import Sizes from './components/Sizes/Sizes'
import {sizesData} from './components/Data/Data';
import Bevrages from './components/Bevrages/Bevrages';
import {bevragesData} from './components/Data/Data';
import Offers from './components/Offers/Offers';
import {offersData} from './components/Data/Data';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';
import {menuData} from './components/Data/Data';
import Login from './components/Login/Login';


const App = () => {
    const [token, setToken] = useState();

   // if(!token) {
    //    return <Login setToken={setToken} />
 //   }

    return (
        <div>
            <Router>
                <switch>
                <Route path='/menu' component={(props) => (<> <Menu items={menuData} /> </>)}/>
                <Route path='/' exact render={(props) => (<> <Offers items={offersData}/> </>)}/>
                <Route path='/toppings' component={(props) => (<> <Toppings items={toppingsData}/> </>)}/>
                <Route path='/dips' component={(props) => (<> <Dips items={dipsData}/> </>)}/>
                <Route path='/bevrages' component={(props) => (<> <Bevrages items={bevragesData}/> </>)}/>
                <Route path='/sizes' component={(props) => (<> <Sizes items={sizesData}/> </>)}/>
                    <Route path='/cart' component={<Cart/>}/>
                </switch>
        </Router>
        </div>
    );
}

export default App;
