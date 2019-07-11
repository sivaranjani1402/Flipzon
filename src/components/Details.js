import React, { Component } from 'react'
import {ProductConsumer} from '../Context'
import {Link} from 'react-router-dom'


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {id,company,img,info,price,title,inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>
                                        {title}
                                    </h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model : {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by : <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <strong>
                                        price : <span>Rs.</span>
                                        {price}
                                    </strong>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        some info about product:
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    <div>
                                        <Link to="/">
                                            <button type="button" className="btn btn-outline-info">Back to Product</button>
                                        </Link>
                                        <button type="button" className="btn btn-outline-primary" disabled={inCart?true:false}
                                        onClick={()=>{
                                            value.addToCart(id);
                                        }} >
                                            {inCart?(<p className="text-capitalize mb-0" disabled>inCart</p>):(<i className="fas fa-cart-plus"/>)}
                                        </button>
                                    </div> 
                               </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
