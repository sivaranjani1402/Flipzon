import React, { Component } from 'react'
import Title from '../Title'
import CartColumn from './CartColumn'
import EmptyCartt from './EmptyCartt'
import {ProductConsumer} from '../../Context'
import CartList from './CartList'
import CartTotals from './CartTotals'

export default class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
            {(value)=>{
                const {cart} = value
                if(cart.length>0)
                {
                    return(
                        <React.Fragment>
                        <Title name="Your" title="Cart" />
                        <CartColumn />
                        <CartList value={value}/>
                        <CartTotals value={value} />
                        </React.Fragment>
                    )
                }
                else
                {
                    return(<EmptyCartt />)
                }
            }}
            </ProductConsumer>
        )
    }
}
