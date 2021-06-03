import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import SubHeader from './components/SubHeader';
import { setCartItem } from './features/product/productSlice';
import { selectUsername, setSignIn } from './features/user/userSlice';
import db from './Firebase';

function App() {
  const username = useSelector(selectUsername)
  const dispatch = useDispatch()
  useEffect(() => {
    db.collection('cartItem').onSnapshot(snapshot => {
      //console.log(snapshot);
      let tempCartItem = snapshot.docs.map(item => {
        return { id: item.id, ...item.data() }
      })
      dispatch(setCartItem(tempCartItem));
    })
  }, [])
  useEffect(() => {
    let user = localStorage.getItem('user');
    if (user) {
      dispatch(setSignIn(JSON.parse(user)));
    }
  }, [])
  return (
    <div className="App">
      <Router>
        {!username ?
          <>
            <Login />
          </> : <>
            <Header />
            <SubHeader />
            <Switch>

              <Route path="/cart">
                <Cart />
              </Route>


              <Route path="/">
                <Home />
              </Route>




            </Switch>
          </>
        }
      </Router>
    </div>
  );
}

export default App;
