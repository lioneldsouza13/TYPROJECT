import React, { Component} from 'react';
import Input from '../../../components/UI/Input/Input'
import classes from './UserData.module.css';
import {updateObject} from '../../../../src/shared/utility';
import axios from 'axios';

class UserData extends Component {
    state = {
        userForm: {
            name: {
                elementType: 'input',
                label: 'Name',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            address: {
                elementType: 'textarea',
                label: 'Address',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Address'
                },
                value: ''
            },
            city: {
                elementType: 'input',
                label:'City',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your City'
                },
                value: ''
            },
            pinCode: {
                elementType: 'input',
                label: 'PinCode',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Pincode'
                },
                value: '',
                validation: {
                    minLength: 6,
                    maxLength: 6
                },
            },
            mobileNo: {
                elementType: 'input',
                label: 'Mobile No',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Number'
                },
                value: ''
            },
            Email: {
                elementType: 'input',
                label: 'Email',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Email'
                },
                value: ''
            },
            DOB: {
                elementType: 'input',
                label: 'Date of Birth',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your DOB'
                },
                value: ''
            },
        }
    }

    fetchData =()=>{
        let url ='http://localhost:3000/search/user'
        axios.get(url).then(result=>{
            console.log(result.data)
        }).catch((e)=>console.log(e))
    }


    inputChangedHandler = (event, inputIdentifier) => {
        const updatedFormElement = updateObject(this.state.userForm[inputIdentifier], {
            value: event.target.value
        });

        const updatedUserForm = updateObject(this.state.userForm, {
            [inputIdentifier]: updatedFormElement
        });

        updatedUserForm[inputIdentifier] = updatedFormElement;

        this.setState({userForm: updatedUserForm});
   }
//
//    submitHandler = event => {
//        event.preventDefault();
//
//        const user = {
//            name: this.state.userForm.name.value,
//            address: this.state.userForm.address.value,
//            city: this.state.userForm.city.value,
//            pincode:this.state.userForm.pinCode.value,
//            mobileNo: this.state.userForm.mobileNo.value,
//            Email: this.state.userForm.Email.value,
//            DOB: this.state.userForm.DOB.value
//        };
//
//        axios.post('https://jsonplaceholder.typicode.com/users', {user})
//        .then(res => {
//            console.log(res);
//            console.log(res.data);
//
//        })
//        
//    }
//
        submitHandler = (event) => {
            event.preventDefault();
           const user = {};

        for(let formElementIdentifier in this.state.userForm){
            user[formElementIdentifier] = this.state.userForm[formElementIdentifier].value
        }

        axios.post('https://jsonplaceholder.typicode.com/users', {user})
        .then(res => {
            console.log(res);
            console.log(res.data);

        })
    }


    render () {
        const formElementsArray = [];
        for(let key in this.state.userForm){
            formElementsArray.push({
                id: key,
                config: this.state.userForm[key]
            });
        }
        let form = (
            <form onSubmit={this.submitHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                    key={formElement.id}
                    elementType= {formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    valueType = {formElement.id}
                    label={formElement.config.label}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
                <button type="submit" onClick={this.fetchData}>Submit</button>
            </form>
        );
    
        return (
            <div className={classes.UserData}>
                <h3>Enter User Data </h3>
                {form}
            </div>
        );

    };
    
}

export default UserData;