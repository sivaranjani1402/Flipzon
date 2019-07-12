import React, { Component } from 'react'
import Title from './Title'
import {ProductConsumer} from '../Context'
import EmptyCartt from './cart/EmptyCartt'
import CartDisplay from './cart/CartDisplay';
import TextField from '@material-ui/core/TextField';


export default class Checkout extends Component {
    constructor()
    {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email:"",
            zip:"",
            cvv:"",
            cardName:"",
            cardNo:'',
            date:"",
            username:"",
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        // console.log(this.state)
    }

    render() {
        const emailRegex = RegExp(
            /\S+@\S+\.\S+/
            );
        const cardRegex = RegExp(
            /[0-9]{13}(?:[0-9]{3})/
        )
        const cvvRegex = RegExp(
            /[0-9]{3}/
        )
        const zipRegex = RegExp(
            /[0-9]{6}/
        )
        const dateRegex = RegExp(
            /[0-3-]+[0-9-]+-[0-9]{4}/
        )
        // console.log(emailRegex,cardRegex,cvvRegex,zipRegex,dateRegex);
        return (
            
            <ProductConsumer>
            {(value) => {
                    return(
                    <div className="container">
                        <Title name="Checkout" title="Form" />  
                            <div className="row">
                            <div className="col-md-8">
                        <h4 className="text-center">Billing Address</h4>
                        <form className="needs-validation" onSubmit={(e)=>this.handleSubmit(e)}>
                            <div className="row">
                                <div className="col">
                                    <TextField
                                        id="standard-password-input"
                                        label="FirstName"
                                        type="text"
                                        name="firstName"
                                        autoComplete="off"
                                        margin="normal"
                                        inputProps={{maxLength:20}}
                                        onChange={(e)=>this.handleChange(e)}
                                        style={{width:"285px"}}
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <TextField
                                        id="standard-password-input"
                                        label="LastName"
                                        type="text"
                                        name="lastName"
                                        autoComplete="off"
                                        margin="normal"
                                        style={{width:"285px"}}
                                        inputProps={{maxLength:20}}
                                        onChange={(e)=>this.handleChange(e)}
                                        required
                                    />
                                </div>
                            </div>
                            <TextField
                                id="standard-password-input"
                                label="UserName"
                                type="text"
                                fullWidth
                                autoComplete="off"
                                margin="normal"
                                name="username"
                                inputProps={{maxLength:20}}
                                onChange={(e)=>this.handleChange(e)}
                                required
                            />
                            <TextField
                                    error={this.state.email.length===0?false:!emailRegex.test(this.state.email)}
                                    id="standard-password-input"
                                    label="Email"
                                    type="text"
                                    autoComplete="off"
                                    margin="normal"
                                    fullWidth
                                    name="email"
                                    onChange={(e)=>this.handleChange(e)}
                                    helperText="Enter a valid email Address"
                                    required
                            />
                            <TextField
                                    id="standard-textarea"
                                    label="Address"
                                    type="text"
                                    autoComplete="off"
                                    margin="normal"
                                    fullWidth
                                    multiline
                                    required
                            />
                            <div className="row">
                                <div className="col">
                                    <TextField
                                        id="standard-select-currency-native"
                                        select
                                        label="Country"
                                        SelectProps={{ native: true }}
                                        margin="normal"
                                        style={{width:"170px"}}>
                                            <option>
                                                Select...
                                            </option>
                                            <option>
                                                India
                                            </option>
                                    </TextField>
                                </div>
                                <div className="col">
                                    <TextField
                                        id="standard-select-currency-native"
                                        select
                                        label="State"
                                        SelectProps={{ native: true }}
                                        margin="normal"
                                        style={{width:"170px"}}>
                                            <option>
                                                Select...
                                            </option>
                                            <option>
                                                TamilNadu
                                            </option>
                                    </TextField>
                                </div>
                                <div className="col">
                                    <TextField
                                        error={this.state.zip.length===0?false:!zipRegex.test(this.state.zip)}
                                        id="standard-password-input"
                                        label="ZIP"
                                        type="number"
                                        onInput = {(e) =>{
                                    e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,6)
                                }}
                                        autoComplete="off"
                                        margin="normal"
                                        style={{width:"185px"}}
                                        name="zip"
                                        inputProps={{maxLength:"6",minLength:"6"}}
                                        onChange={(e)=>this.handleChange(e)}
                                        required
                                    />
                                </div>
                        </div>
                        <hr className="mb-4" />
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="same-address" />
                            <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="save-info" />
                            <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
                        </div>
                        <hr className="mb-4" />
                        <h4 className="mb-3">Payment</h4>
                        <div className="d-block my-3">
                            <div className="custom-control custom-radio">
                                <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" defaultChecked required />
                                <label className="custom-control-label" htmlFor="credit">Credit card</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                                <label className="custom-control-label" htmlFor="debit">Debit card</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input id="cash" name="paymentMethod" type="radio" className="custom-control-input" required />
                                <label className="custom-control-label" htmlFor="cash">Cash On Delivery</label>
                            </div>
                        </div>
                    <div className="row">
                        <div className="col">
                            <TextField
                                id="standard-password-input"
                                label="Cardholder Name"
                                type="text"
                                autoComplete="off"
                                margin="normal"
                                style={{width:"250px"}}
                                name="cardName"
                                inputProps={{maxLength:"20"}}
                                onChange={(e)=>this.handleChange(e)}
                                required
                            />
                        </div>
                        <div className="col">
                            <TextField
                                id="standard-password-input"
                                label="CardNumber"
                                type="number"
                                onInput = {(e) =>{
                                    e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,16)
                                }}
                                error={this.state.cardNo.length===0?false:!cardRegex.test(this.state.cardNo)}
                                autoComplete="off"
                                margin="normal"
                                inputProps={{maxLength:"16",minLength:"16"}}
                                style={{width:"300px"}}
                                name="cardNo"
                                onChange={(e)=>this.handleChange(e)}
                                required
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <TextField
                                error={this.state.date.length===0?false:!dateRegex.test(this.state.date)}
                                id="standard-password-input"
                                label="Expiration Date"
                                type="text"
                                required
                                name="date"
                                autoComplete="off"
                                margin="normal"
                                inputProps={{maxLength:"7",minLength:"7"}}
                                style={{width:"250px"}}
                                onChange={(e)=>this.handleChange(e)}
                                helperText="mm-yyyy"
                            />
                        </div>
                        <div className="col">
                            <TextField
                                error={this.state.cvv.length===0?false:!cvvRegex.test(this.state.cvv)}
                                id="standard-password-input"
                                type="number"
                                label="CVV"
                                name="cvv"
                                autoComplete="off"
                                margin="normal"
                                onInput = {(e) =>{
                                    e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,3)
                                }}
                                style={{width:"300px"}}
                                required
                                onChange={(e)=>this.handleChange(e)}
                            />
                        </div>
                    </div>
                        <hr className="mb-4" />
                        <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                        <br />
                    </form>
                    </div>
                    <div className="col-3 pt-3">
                        <ProductConsumer>
                            {(value)=>{
                                const {cart} = value
                                if(cart.length>0)
                                {
                                    return(
                                        <React.Fragment>
                                            <CartDisplay value={value} />
                                        </React.Fragment>
                                    )
                                }
                                else
                                {
                                    return(<EmptyCartt />)
                                }
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </div>)
                }        
            }
        </ProductConsumer>
                
        )
    }
}
