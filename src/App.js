import React, { Component } from 'react';
import './App.css';
//import NavigationItems from './components/NavigationItems/NavigationItems';
import { Route, Switch, withRouter } from 'react-router-dom';
import UserData from './containers/Forms/UserData/UserData';
//import Feedback from './containers/Forms/Feedback/Feedback';
import Layout from './containers/Layout/Layout';
import Cards from './containers/Cards/Cards';
import SignUpForm from './containers/Forms/SignUpForm/SignUpForm';
import SignIn from './containers/Forms/SignIn/SignIn'; 
import SignInForm from './containers/SignInForm/SignInForm';
import SellVehicle from './containers/SellVehicle/SellVehicle';

class App extends Component {
  render() {
    let routes = (
      <Switch>
          <Route path="/" exact component={UserData} />
          <Route path="/signin" exact component={SignIn}/>
          <Route path="/display" exact component={Cards} />
          <Route path="/signUp" exact component={SignUpForm} />
          <Route path="/signInForm" exact component={SignInForm} />
          <Route path="/sell" exact component={SellVehicle} />
      </Switch>
    );
    return (
      <div style={{backgroundColor: '#95afca'}}> 
        
        <Layout />
        
        {routes}

        <div style={{textAlign: 'center', height: '200px', backgroundColor: 'grey'}}>
            <h2>Footer Section </h2>
        </div>


      </div>
    );
  }
}

export default withRouter(App);
