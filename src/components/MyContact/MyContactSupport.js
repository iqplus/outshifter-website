import React from "react"
import styled from 'styled-components';
import axios from 'axios'
import Button from "../Buttons/Button"
import qs from 'qs'
import * as globalvariables from '../../global'

const FormGroup = styled.div`
    display: block;
    width: 100%;
    margin: 0 auto;
    color: #9C9C9F;
    .submit-button {text-align: right;}
    .thank-you {
        text-align: center;
        border: 1px solid #4A90E2;
        border-radius: 6px;
        margin: 30px 0px;
    }
    .thank-you h6 {
        color: #4A90E2;
        margin-top: 8px;
    }
    @media only screen and (max-width: 991px) {
        .submit-button {text-align: center;}
    }
`;

const Label = styled.label`
    display: block;
`;

const MyInput = styled.input`
    color: #9C9C9F;
    background: transparent;
    padding: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 2em;
    border: none;
    box-shadow: 0 0 0 1px rgba(50,50,93,.05), 0 2px 5px 0 rgba(50,50,93,.1), 0 1px 1px 0 rgba(0,0,0,.07);
    border-radius: 6px;
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    &:focus {
        outline:none;
        border: 1px solid #4A90E2;
    };
    @media only screen and (max-width: 500px) {
        border: solid 1px lightgrey;
        box-shadow: none;
    }
`;

const MySelect = styled.select`
    color: #9C9C9F;
    background: transparent;
    padding: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 2em;
    height: 40px;
    border: none;
    box-shadow: 0 0 0 1px rgba(50,50,93,.05), 0 2px 5px 0 rgba(50,50,93,.1), 0 1px 1px 0 rgba(0,0,0,.07);
    border-radius: 6px;
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%239C9C9F'><polygon points='0,0 100,0 50,50'/></svg>") no-repeat;
    background-size: 12px;
    background-position: calc(100% - 20px) 65%;
    background-repeat: no-repeat;
    &:focus {
        outline:none;
        border: 1px solid #4A90E2;
    }
    @media only screen and (max-width: 500px) {
        border: solid 1px lightgrey;
        box-shadow: none;
    }
`;

const MyTextArea = styled.textarea`
    background: transparent;
    color: #9C9C9F;
    padding: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 2em;
    border: none;
    box-shadow: 0 0 0 1px rgba(50,50,93,.05), 0 2px 5px 0 rgba(50,50,93,.1), 0 1px 1px 0 rgba(0,0,0,.07);
    border-radius: 6px;
    width: 100%;
    height: 200px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    &:focus {
        outline: none;
        border: 1px solid #4A90E2;
    }
    @media only screen and (max-width: 500px) {
        border: solid 1px lightgrey;
        box-shadow: none;
    }
`;


class MyContact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            email: '',
            subject: '',
            message: '',
            thankyou: false
      }
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value,
        })
    }

    onFormSubmit = (e) => {

        e.preventDefault()

        axios({
            method: 'post',
            url: globalvariables.MailUrl,
            data: qs.stringify({
                email: this.state.email,
                name: this.state.name,
                username: this.state.username,
                subject: this.state.subject,
                message: this.state.message,
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }})
        .then(function (response) {
            console.log("Success");
            console.log(response);
        })
        .catch(function (response) {
            console.log("Siamo fuori");
            console.log(response);
        });
        
        this.setState({
            thankyou: true
        })
        this.resetForm();
    }

    resetForm() {
        this.setState({
            name: '',
            segment: '',
            email: '',
            subject: '',
            message: ''
        })
    }
   
    render() {
        return (
            <form onSubmit={this.onFormSubmit} method="post">
            <FormGroup>
        
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <Label>Your Name</Label>
                            <MyInput
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                            />
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <Label>Username</Label>
                            <MyInput
                                type="text"
                                name="username"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                            />
                    </div>
                </div>

                <Label>Email</Label>
                <MyInput
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                />

                <Label>Subject</Label>
                <MyInput
                    type="text"
                    name="subject"
                    value={this.state.subject}
                    onChange={this.handleInputChange}
                />

                <Label>Message</Label>
                <MyTextArea
                    name="message"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                ></MyTextArea>

                <div className="row submit-button">
                    <div className="col">
                        <Button type="submit">Submit</Button>
                    </div>
                </div>

                {this.state.thankyou ? (
                    <div className="row thank-you">
                    <div className="col">
                        <h6>Thank you! Your message has been sent.</h6>
                    </div>
                    </div>
                ) : (
                    <div></div>
                )}
       
            </FormGroup>
            </form>
        );
    }
}

export default MyContact;