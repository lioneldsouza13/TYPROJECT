import React, { Component}  from 'react';
import NavigationItems from '../../components/NavigationItems/NavigationItems';
//import UserData from '../Forms/UserData/UserData';
//import Feedback from '../Forms/Feedback/Feedback';

class Layout extends Component {
    render () {
        return (
            <div>
                <h1 style={{textAlign: 'center', backgroundColor: '#336699'}}>Header Section</h1>
                <h3 style={{textAlign: 'center', backgroundColor: '#5288DB'}}>
                <NavigationItems />

                </h3>
                
                
            </div>
        );
    }
}

export default Layout;