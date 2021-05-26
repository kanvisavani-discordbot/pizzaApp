import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Toppings} from './components/Toppings/Toppings';
import {toppingsData} from './components/Data/Data';
import {Dips} from './components/Dips/Dips';
import {dipsData} from './components/Data/Data';
import {Sizes} from './components/Sizes/Sizes'
import {Bevrages} from './components/Bevrages/Bevrages';
import {bevragesData} from './components/Data/Data';
import {Offers} from './components/Offers/Offers';
import {offersData} from './components/Data/Data';
import {Menu} from './components/Menu/Menu';
import {Cart} from './components/Cart/Cart';
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
                <Route path='/menu' component={() => (<> <Menu/></>)}/>
                <Route path='/' exact render={() => (<> <Offers/> </>)}/>
                <Route path='/toppings' component={() => (<> <Toppings/> </>)}/>
                <Route path='/dips' component={() => (<> <Dips/> </>)}/>
                <Route path='/bevrages' component={() => (<> <Bevrages/> </>)}/>
                <Route path='/sizes' component={() => (<><Sizes/></>)}/>
                    <Route path='/cart' component={() => (<> <Cart/></>)}/>
                </switch>
        </Router>
        </div>
    );
}

export default App;
