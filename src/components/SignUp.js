import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import Bootstrap from "react-bootstrap";

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
        [event.target.id]: event.target.value
    });
    }

    handleSubmit = event => {
    event.preventDefault();
    }

    render() {
    return (
        <div className="Login">
        <div className="container">
        <h4 className="text-center">SignUp</h4>
        <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="email" bsSize="large">
            <label>
                Email
            </label>
            <Form.Control
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                autoComplete="off"
            />
            </Form.Group>
            <Form.Group controlId="password" bsSize="large">
            <label>
                Password
            </label>
            <Form.Control
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
            />
            <small id="passwordHelpBlock" class="form-text text-muted">
                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </small>
            </Form.Group>
            <Form.Group controlId="c_password" bsSize="large">
            <label>
                Confirm Password
            </label>
            <Form.Control
                value={this.state.c_password}
                onChange={this.handleChange}
                type="password"
            />
            </Form.Group>
            <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            >
            SignUp
            </Button>
        </Form>
        </div></div>
    );
    }
}