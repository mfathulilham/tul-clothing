import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth} from './firebase/firebase.utils';
import { onAuthStateChanged } from "firebase/auth";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null
  
  componentDidMount(){
    this.unsubscribeFromAuth = onAuthStateChanged( auth, (user) => {
      if (user) {
        this.setState({ currentUser: user });
        console.log(this.state);
      } else {
        this.setState({ currentUser: null });
        console.log('Logged out');
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/shop' element={<ShopPage />}></Route>
          <Route path='/signin' element={<SignInAndSignUp />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;