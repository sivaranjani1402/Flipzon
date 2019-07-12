import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import TextField from '@material-ui/core/TextField';


export default class Login extends Component {
    constructor(props) {
    super(props);

    this.state = {
        email: "",
        password: ""
    };
    }

    validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
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
        <div className="Login">
        <div className="container">
        <h4 className="text-center">LOGIN</h4>
        <Form onSubmit={this.handleSubmit}>
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
                    type="text"
                    fullWidth
                    autoComplete="off"
                    margin="normal"
                    name="username"
                    onChange={(e)=>this.handleChange(e)}
                    required
            />
            <Button
                block
                disabled={!this.validateForm()}
                type="submit"
            >
            Login
            </Button>
        </Form>
        </div></div>
    );
    }
}