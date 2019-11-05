import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {connect} from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sing-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
//import {dispatch} from '../../Library/Caches/typescript/3.6/node_modules/rxjs/internal/observable/range';


class App extends React.Component {

    unsuscribeFromAuth = null


    componentDidMount() {

      const {setCurrentUser} = this.props;

      this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

        if(userAuth){

          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot =>{
            //console.log(snapShot.data());
            setCurrentUser({             
                id: snapShot.id,
                ...snapShot.data()
              })
          });
        } else 
        //createUserProfileDocument(userAuth);
        setCurrentUser(userAuth);
      });
    }

    componentWillUnmount(){
      this.unsuscribeFromAuth();
    }

  render () {
    return (
      <div>
        <Header />
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/register' component={SignInAndSignUpPage}/>
      </Switch> 
        
      </div>
    );
  }
  
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);