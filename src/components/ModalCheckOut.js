import React, { Component } from 'react'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom'

export default class ModalCheckOut extends Component {
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
            console.log(this.state)
        return (
            <ModalContainer>
                <div className="container">
                        <div id= "modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
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
                                        type="password"
                                        fullWidth
                                        autoComplete="off"
                                        margin="normal"
                                        name="password"
                                        onChange={(e)=>this.handleChange(e)}
                                        required
                                />
                                <Link to="/checkout">
                                <Button
                                    block
                                    disabled={!this.validateForm()}
                                    type="submit"
                                >
                                Login
                                </Button>
                                </Link>
                            </Form>
                            <hr className="mb-4" />
                            <Link to="/signUp">
                                <button type="button" className="btn btn-outline-primary">Create an Account</button>
                            </Link>
                        </div>
                    </div>
                    
            </ModalContainer>
)
    }
}

const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background: var(--mainWhite)
}
`