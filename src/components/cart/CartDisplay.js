import React from 'react'

export default function CartDisplay({value}) 
{
        const {cartSubTotal,cartTax,cartTotal} = value
        return (
            <React.Fragment>
                <div className="container">
                <div className="row">
                    <div className="col-3 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <h5>
                            <span className="text-title">
                                SubTotal:
                            </span>
                            <br/>
                            <strong>
                                Rs. {cartSubTotal}
                            </strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                Tax:
                            </span><br/>
                            <strong>
                                Rs. {cartTax}
                            </strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                Total:
                            </span><br/>
                            <strong>
                                Rs. {cartTotal}
                            </strong>
                        </h5>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
}
