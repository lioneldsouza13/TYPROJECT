import React, { Component } from 'react';
import Card from '../../components/UI/Card/Card';
import axios from 'axios';

class Cards extends Component {
    state = {
        display: []
    }

    componentDidMount () {
        axios.get('http://localhost:3001/fetch-values').then(result => {
            const fetchedValues = [];
            for(let key in result.data){
                fetchedValues.push({
                    ...result.data[key],
                    id: key
                });
            }
            this.setState({display: fetchedValues})
        });
    };
    
    render () {
        let displayNav = this.state.display.map(dis => (
            <Card name={dis.User_Name} userid={dis.UserId} key={dis.id}/>
        ));
      
        return (
            
            <div>
                {displayNav}
            </div>
        )
    }
}

export default Cards;