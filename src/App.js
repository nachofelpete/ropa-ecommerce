import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sing-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser: null
    };
  }

    unsuscribeFromAuth = null


    componentDidMount() {
      this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

        if(userAuth){

          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot =>{
            //console.log(snapShot.data());
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            });
            console.log(this.state);
          });
        } else 
        //createUserProfileDocument(userAuth);
        this.setState({currentUser: userAuth});
      });
    }

    componentWillUnmount(){
      this.unsuscribeFromAuth();
    }

  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/register' component={SignInAndSignUpPage}/>
      </Switch> 
        
      </div>
    );
  }
  
}

export default App;