import React, { Component } from 'react';
import './App.css';
//import NavigationItems from './components/NavigationItems/NavigationItems';
import { Route, Switch, withRouter } from 'react-router-dom';
import UserData from './containers/Forms/UserData/UserData';
import Feedback from './containers/Forms/Feedback/Feedback';
import Layout from './containers/Layout/Layout';
 
class App extends Component {
  render() {
    let routes = (
      <Switch>
          <Route path="/" exact component={UserData} />
          <Route path="/feedback" exact component={Feedback}/>
      </Switch>
    );
    return (
      <div> 
        Sample GUI 
        <Layout />
        
        {routes}


      </div>
    );
  }
}

export default withRouter(App);
