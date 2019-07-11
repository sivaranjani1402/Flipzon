import React, { Component } from 'react'
import Title from './Title'
import {ProductConsumer} from '../Context'
import EmptyCartt from './cart/EmptyCartt'
import CartDisplay from './cart/CartDisplay';

export default class Checkout extends Component {
    render() {
        return (
            <div className="container">
                <Title name="Checkout" title="Form" />  
                <div className="row">
                    <div className="col-md-8">
                        <h4 className="text-center">Billing Address</h4>
                        <form className="needs-validation" novalidate>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label for="firstName">First name</label>
                                    <input type="text" className="form-control" id="firstName" autocomplete="off" required />
                                    <div className="invalid-feedback">
                                    Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="lastName">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" autocomplete="off" required />
                                    <div className="invalid-feedback">
                                    Valid last name is required.
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="username">Username</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">@</span>
                                    </div>
                                    <input type="text" className="form-control" id="username" placeholder="Username" required autocomplete="off"/>
                                    <div className="invalid-feedback" style={{width: "100%"}}>
                                    Your username is required.
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="email">Email <span className="text-muted">(Optional)</span></label>
                                <input type="email" className="form-control" id="email" placeholder="you@example.com" autocomplete="off"/>
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>

                            <div className="mb-3">
                                <label for="address">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required autocomplete="off"/>
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>

                            <div className="mb-3">
                                <label for="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                                <input type="text" className="form-control" id="address2" placeholder="Apartment" autocomplete="off"/>
                            </div>

                            <div className="row">
                                <div className="col-md-5 mb-3">
                                    <label for="country">Country</label>
                                    <select className="custom-select d-block w-100" id="country" required>
                                        <option value="">Choose...</option>
                                        <option>India</option>
                                    </select>
                                    <div className="invalid-feedback">
                                    Please select a valid country.
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label for="state">State</label>
                                    <select className="custom-select d-block w-100" id="state" required>
                                        <option value="">Choose...</option>
                                        <option>TamilNadu</option>
                                    </select>
                                    <div className="invalid-feedback">
                                    Please provide a valid state.
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label for="zip">Zip</label>
                                <input type="text" className="form-control" id="zip" placeholder="" required autocomplete="off"/>
                                <div className="invalid-feedback">
                                Zip code required.
                                </div>
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="same-address" />
                            <label className="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="save-info" />
                            <label className="custom-control-label" for="save-info">Save this information for next time</label>
                        </div>
                        <hr className="mb-4" />
                        <h4 className="mb-3">Payment</h4>
                        <div className="d-block my-3">
                        <div className="custom-control custom-radio">
                            <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked required />
                            <label className="custom-control-label" for="credit">Credit card</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                            <label className="custom-control-label" for="debit">Debit card</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input id="cash" name="paymentMethod" type="radio" className="custom-control-input" required />
                            <label className="custom-control-label" for="cash">Cash On Delivery</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label for="cc-name">Name on card</label>
                            <input type="text" className="form-control" id="cc-name" placeholder="" required autocomplete="off"/>
                            <small className="text-muted">Full name as displayed on card</small>
                            <div className="invalid-feedback">
                                Name on card is required
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label for="cc-number">Card number</label>
                            <input type="text" className="form-control" id="cc-number" placeholder="" required autocomplete="off" name="cardNo"/>
                            <div className="invalid-feedback">
                                card number is required
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <label for="cc-expiration">Expiration</label>
                            <input type="text" className="form-control" id="cc-expiration" placeholder="mm/yyyy" required autocomplete="off"/>
                            <div className="invalid-feedback">
                            Expiration date required
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label for="cc-cvv">CVV</label>
                            <input type="text" className="form-control" id="cc-cvv" placeholder="" required autocomplete="off"/>
                            <div className="invalid-feedback">
                            Security code required
                            </div>
                        </div>
                    </div>
                    <hr className="mb-4" />
                    <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                    <br />
                    </form>
                    </div>
                    <div className="col pt-5">
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
            </div>
        )
    }
}
