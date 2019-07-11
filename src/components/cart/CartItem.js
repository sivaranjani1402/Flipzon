import React from 'react'

export default function CartItem({item,value}) {
    const {id,title,img,price,total,count} = item;
    const {increment,decrement,removeItem} = value;
    return (
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} alt="product" className="img-fluid" style={{width:'5rem',height:'5rem'}} />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="g-lg-none">{title}</span>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="g-lg-none">{price}</span>
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>-</span>
                    </div>
                    <div>
                        <span className="btn btn-black mx-1">{count}</span>
                    </div>
                    <div>
                        <span className="btn btn-black mx-1" onClick={()=>increment(id)}>+</span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={()=>removeItem(id)}>
                    <i className="fas fa-trash" />
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>
                    Rs.{total}
                </strong>
            </div>
        </div>
    )
}
