import React, {Component} from 'react';
import classes from './SellVehicle.module.css';
import { Form } from 'shineout';
import { updateSelect, updateObject } from '../../shared/utility';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';


class SellVehicle extends Component {
    state = {
        formdata: {
            type: '',
            brand: '',
            model: '',
            fuel: '',
            year: '',
            registration_state: '',
            km_driven: '',
            number_plate: '',
            price: '',
            image: '',
            documents: '',
            
        },
        types: [],
        brands: [],
        models: [],
        year: [],
        fuels: [],
        reg_state : [],
        km_driven: [],
        file: '',
        imagePrev: '',
        tempBrand: '',
        tempModel: '',
        tempType: ''
    }

    componentDidMount () {
        axios.get('http://localhost:3001/fetch-vehicle-type').then(result => {
            console.log(result.data);
            this.setState({types: result.data})
        });

        axios.get('http://localhost:3001/fetch-year').then(result => {
            console.log(result.data);
            this.setState({year: result.data})
        });

        
        axios.get('http://localhost:3001/fetch-registration-state').then(result => {
            console.log(result.data);
            this.setState({reg_state: result.data})
        });

        axios.get('http://localhost:3001/fetch-km_driven').then(result => {
            console.log(result.data);
            this.setState({km_driven: result.data})
        });

        
    }

   selectChangedHandlerType = (e) => {
       this.setState({
           formdata: {
               ...this.state.formdata,
               type: e.target.value,
               
           },
           brands: [],
           models: [],
           tempType: e.target.value
       })

       if(e.target.value === 'Two-Wheelers'){
           axios.get('http://localhost:3001/fetch-twoWheeler-brand').then(result => {
                this.setState({brands: result.data});
           });

           axios.get('http://localhost:3001/fetch-twoWheeler-fuel').then(result =>{
                this.setState({fuels: result.data})
           });
        }
        else {
            axios.get('http://localhost:3001/fetch-fourWheeler-brand').then(result => {
                this.setState({brands: result.data});
           });
           axios.get('http://localhost:3001/fetch-fourWheeler-fuel').then(result =>{
            this.setState({fuels: result.data})
       });
        }
 }

 
    selectChangedHandlerBrand = (e) => {
        e.preventDefault();
        if(e.target.value === 'Others'){
            this.setState({
                tempBrand: e.target.value
            });
        }
        
        else { 
        this.setState({
            tempBrand: e.target.value,
            formdata: {
                ...this.state.formdata,
                brand: e.target.value
            }
        });

        if(this.state.tempType === 'Four-Wheelers'){
             axios.post('http://localhost:3001/fetch-fourWheeler-model', {brand: e.target.value})
             .then((result) => {
                 this.setState({models: result.data})
                 console.log(result.data);
             }).catch(e => {
                 console.log(e);
             })
        }
        else if(this.state.tempType === 'Two-Wheelers'){
            axios.post('http://localhost:3001/fetch-twoWheeler-model', {brand: e.target.value})
            .then((result) => {
                this.setState({models: result.data})
                console.log(result.data);
            }).catch(e => {
                console.log(e);
            })
       }
    }
}

    selectChangedHandlerModel = (e) => {
        e.preventDefault();
        this.setState({
            formdata: {
                ...this.state.formdata,
                model: e.target.value
            }
        })
    }

    selectChangedHandlerYear = (e) => {
        e.preventDefault();
        this.setState({
            formdata: {
                ...this.state.formdata,
                year: e.target.value
            }
        })
    }
    selectChangedHandlerKm = (e) => {
        e.preventDefault();
        this.setState({
            formdata: {
                ...this.state.formdata,
                km_driven: e.target.value
            }
        })
    };

    selectChangedHandlerReg = (e) => {
        e.preventDefault();
        this.setState({
            formdata: {
                ...this.state.formdata,
                registration_state: e.target.value
            }
        })
    };

    selectChangedHandlerFuel = (e) => {
        e.preventDefault();
        this.setState({
            formdata: {
                ...this.state.formdata,
                fuel: e.target.value
            }
        })
    }

    selectChangedHandlerName = (e) => {
        e.preventDefault();
        this.setState({
            formdata: {
                ...this.state.formdata,
                number_plate: e.target.value
            }
        })
    }
    
    selectChangedHandlerPrice = (e) => {
        e.preventDefault();
        this.setState({
            formdata: {
                ...this.state.formdata,
                price: e.target.value
            }
        })
    }

    formSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.formdata)
        axios.post('http://localhost:3001/store-vehicle-details', {vehicles: this.state.formdata})
        .then((post) => {
            console.log("Data Sent")
        }).catch(e => {
            console.log(e);
        })
    }


      remove = () => {
          this.setState({brands: [], types: []});
          console.log(this.state.brands);
          console.log(this.state.types);
      }

      handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePrev: reader.result,
            formdata: {
                ...this.state.formdata,
                image: file
            }
          });
        }
    
        reader.readAsDataURL(file)
        console.log(file);
    //    console.log()
      } 
    
  render () {
    console.log(this.state.formdata);  
    let {imagePrev} = this.state;
    let imagePreview = null;
    if (imagePrev) {
      imagePreview = (<img className={classes.Image} src={imagePrev} />);
    }

    console.log(this.state.formdata.brand);
    let alternate = null;
    if(this.state.tempBrand === 'Others') {
        alternate = (<TextField label="Brand" placeholder="Enter your Vehicle Brand" className={classes.other} onChange={this.inputChangedHandlerBrand} />);
    }
    

    let alternateM = null;
    if(this.state.formdata.model === 'Others') {
        alternateM = (<TextField label="Model " placeholder="Enter your Vehicle Model" className={classes.other} 
        onChange={this.inputChangedHandlerModel}/>);
    }
    


    console.log(this.state.formdata.type);  
    const options1 = this.state.types.map((item,i) =>
        item === '' ? <MenuItem value={item} key={'placeholder'} hidden >Select the Type</MenuItem> : 
        <MenuItem value={item} key={i} >{item}</MenuItem>
    );

    const options2 = this.state.brands.map((item,i) =>
        item === '' ? <MenuItem value={item} key={'placeholder'} hidden >Select the Brand</MenuItem> : 
        <MenuItem value={item} key={i} >{item}</MenuItem>
    );

    const options3 = this.state.models.map((item,i) =>
        item === '' ? <MenuItem value={item} key={'placeholder'} hidden >Select the Model</MenuItem> : 
        <MenuItem value={item} key={i} >{item}</MenuItem>
    );

    const options4 = this.state.year.map((item,i) =>
        item === '' ? <option value={item} key={'placeholder'} hidden >Select the Year</option> : 
        <option value={item} key={i} >{item}</option>
    );

    const options5 = this.state.fuels.map((item,i) =>
        item === '' ? <option value={item} key={'placeholder'} hidden >Select the Fuel Type</option> : 
        <option value={item} key={i} >{item}</option>
    );

    const options6 = this.state.reg_state.map((item,i) =>
        item === '' ? <option value={item} key={'placeholder'} hidden >Select the state</option> : 
        <option value={item} key={i} >{item}</option>
    );

    
    const options7 = this.state.km_driven.map((item,i) =>
        item === '' ? <option value={item} key={'placeholder'} hidden >Select the KM Driven</option> : 
        <option value={item} key={i} >{item}</option>
    );

    return (
        console.log(this.state.brands),
        
        <div  className={classes.Box} >
            <h2 style={{textAlign:'center', paddingBottom:'15px'}}>Enter your vehicle details</h2>
            <Form className={classes.Sell}>
                       <span> 
                      <label htmlFor="type" className={classes.Label}>Vehicle Type:</label>  
                      <Select
                             id="type" 
                             name="type"
                             className={classes.select} 
                             onChange={this.selectChangedHandlerType}
                             value={this.state.formdata.type}
                        >
                        {options1}
                        </Select>

                        <span className={classes.span1}>
                        <label htmlFor="brand"  style={{marginBottom: '-10px'}}className={classes.Label}>Vehicle Brand:</label>
                        
                        <Select 
                            id="brand"
                            name="brand"
                            value={this.state.formdata.brand}
                            className={classes.select}
                           onChange= {this.selectChangedHandlerBrand}
                        >
                        {options2}
                        </Select>
                        <p className={classes.or} style={{marginBottom: '0px'}}>Select others if brand not present</p> 
                         {alternate}
                        </span>

                        <span className={classes.span1}>
                        <label htmlFor="model"  style={{marginBottom: '-15px'}}className={classes.Label}>Vehicle Model:</label>
                        <Select 
                            id="model"
                            name="model"
                            value={this.state.formdata.model}
                            className={classes.select}
                           onChange= {this.selectChangedHandlerModel}
                        >
                        {options3}
                        </Select>
                        <p className={classes.or} style={{marginBottom: '2px'}}>Select others if model not present</p>
                        {alternateM}
                        </span>
                        </span>
                        <br />
                        <br />
                        <br />
                        <span>
                        <label htmlFor="year" className={classes.Label}>Vehicle Year:</label>
                        <select 
                            id="year"
                            name="year"
                            className={classes.select}
                           onChange= {this.selectChangedHandlerYear}
                        >
                        {options4}
                        </select>
                        <label htmlFor="fuel" className={classes.Label}>Fuel Type:</label>
                        <select 
                            id="fuel"
                            name="fuel"
                            className={classes.select}
                           onChange= {this.selectChangedHandlerFuel}
                        >
                        {options5}
                        </select>
                        <label htmlFor="reg" className={classes.Label}>Registration State:</label>
                        <select 
                            id="reg"
                            name="reg"
                            className={classes.select}
                           onChange= {this.selectChangedHandlerReg}
                        >
                        {options6}
                        </select>
                        
                        <label htmlFor="km" className={classes.Label}>Km Driven:</label>
                        <select 
                            id="km"
                            name="km"
                            className={classes.select}
                           onChange= {this.selectChangedHandlerKm}
                        >
                        {options7}
                        </select>
                        </span>
                        <br />
                        <br />
                        <br />

                        <span className={classes.Span}>

                        <label htmlFor="number" className={classes.Label}> Vehicle Number:</label>
                        <input className={classes.InputDet} placeholder="Enter your vehicle number" id="number" name="number" onChange={this.selectChangedHandlerName} />
                        
                        <br/>
                        <br />
                        <label htmlFor="image" className={classes.Label}>Vehicle Image:</label>
                        <input className={classes.InputDet} id="image" type="file" onChange={this.handleImageChange} /> 
                        <br />
                        { imagePreview }
                        <br/>
                        <label htmlFor="document" className={classes.Label}>Vehicle Document:</label>
                        <input className={classes.InputDet} type="file" accept="application/pdf,application/vnd.ms-excel" id="document" onChange={this.handleDocumentChange} />         
                        
                        <br />
                        <br />
                        <label htmlFor="price" className={classes.Label}>Price:</label>
                        <input className={classes.InputDet} placeholder="Enter the price" id="price" name="number" onChange={this.selectChangedHandlerPrice} />
                        <br/><br/>
                        <button  className="btn btn-primary" onClick={this.formSubmit}>
                            Submit
                        </button>
                        

                        </span>

                        <br />
                        <br /> 

                        

            </Form>
        </div>
    );
  };
}

export default SellVehicle;