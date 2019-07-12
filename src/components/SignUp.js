import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../Context'


export default class Login extends Component {
    constructor(props) {
    super(props);

    this.state = {
        email: "",
        password: "",
        c_password:""
    };
    }

    validateForm() {
    return (
        (this.state.email.length > 0 && this.state.password.length > 0) &&
        (
            this.state.password === this.state.c_password
        )
    );
    }

    handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    });
    }

    handleSubmit = event => {
    event.preventDefault();
    }

    render() {
        const emailRegex = RegExp(
            /\S+@\S+\.\S+/
            );
    return (
        <ProductConsumer>
            {(value)=>{
                const {afterLogin} = value
                return(
                    <div className="Login">
                        <div className="container">
                            <h4 className="text-center">SignUp</h4>
                            <Form onSubmit={()=>{this.handleSubmit();afterLogin()}}>
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
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                autoComplete="off"
                                margin="normal"
                                fullWidth
                                name="password"
                                inputProps={{minLength:"8"}}
                                onChange={(e)=>{this.handleChange(e)}}
                                helperText="Your password must be 8 characters long"
                                required
                            />
                            <TextField
                                id="standard-password-input"
                                label="Confirm Password"
                                type="password"
                                autoComplete="off"
                                margin="normal"
                                fullWidth
                                name="c_password"
                                inputProps={{minLength:"8"}}
                                onChange={(e)=>this.handleChange(e)}
                                error={this.state.password===0 ? false : !(this.state.password===this.state.c_password)}
                                required
                            />
                            <Link to="/checkOut">
                            <Button
                                block
                                disabled={!this.validateForm()}
                                type="submit"
                            >
                            SignUp
                            </Button>
                            </Link>
                            <br />
                            <hr className="mb-4" />
                            <Link to="/login">
                            <span>Already have an Account?</span>
                            <Button
                                block
                                type="submit"
                            >
                            Login
                            </Button>
                            </Link>
                        </Form>
                    </div>
                </div>
                )
            }}
        </ProductConsumer>
        
    );
    }
}