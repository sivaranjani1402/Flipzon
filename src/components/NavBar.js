import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import home from '../home.svg'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark px-sm-5" style={{backgroundColor:"#9cc5df"}}>
               <Link to='/'>
                    <img src={home} alt="store" className="navbar-brand" />
               </Link>
               <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5"> 
                        <Link to="/" className="nav-link" style={{color:'white'}}>
                            FameKart
                        </Link>
                    </li>
               </ul>
               <Link to="/cart" className="ml-auto">
               <button className="btn btn-outline-primary" style={{color:'white'}}>
                    <span className="mr-2">
                        <i className="fas fa-cart-plus"/>
                    </span>
                    MyCart
                </button>
               </Link>
            </nav>
        )
    }
}
