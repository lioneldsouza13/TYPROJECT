import React, { Component}  from 'react';
import NavigationItems from '../../components/NavigationItems/NavigationItems';
//import UserData from '../Forms/UserData/UserData';
//import Feedback from '../Forms/Feedback/Feedback';
import Aux from '../../hoc/Auxilary';

class Layout extends Component {
    render () {
        return (
            <Aux>
            <div>
                <h1 style={{textAlign: 'center', backgroundColor: '#336699'}}>Header Section</h1>
                <h4 style={{textAlign: 'center', backgroundColor: '#5288DB' }}>
                <NavigationItems />

                </h4>
                
           </div>
            </Aux>
    );
    }
}

export default Layout;