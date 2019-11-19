import React from "react"
import styled from 'styled-components';
import axios from 'axios'
import Button from "../Button/Button"
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

    @media only screen and (max-width: 500px) {
        input {border: solid 1px lightgrey;box-shadow: none;}
        select {border: solid 1px lightgrey;box-shadow: none;}
        textarea {border: solid 1px lightgrey;box-shadow: none;}
    }

`;

const Label = styled.label`
    display: block;
`;

const MyInput = styled.input`
    color: #9C9C9F;
    padding: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 2em;
    border: none;
    box-shadow: 0 0 0 1px rgba(50,50,93,.05), 0 2px 5px 0 rgba(50,50,93,.1), 0 1px 1px 0 rgba(0,0,0,.07);
    border-radius: 6px;
    width: 100%;
    &:focus {
        outline:none;
        border: 1px solid #4A90E2;
    };
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
    background: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+) no-repeat 95% 50%;
    &::-ms-expand {
        display: none;
    }
    &:focus {
        outline:none;
        border: 1px solid #4A90E2;
    };
`;

const MyTextArea = styled.textarea`
    color: #9C9C9F;
    padding: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 2em;
    border: none;
    box-shadow: 0 0 0 1px rgba(50,50,93,.05), 0 2px 5px 0 rgba(50,50,93,.1), 0 1px 1px 0 rgba(0,0,0,.07);
    border-radius: 6px;
    width: 100%;
    height: 200px;
    &:focus {
        outline:none;
        border: 1px solid #4A90E2;
    };
`;


class MyContact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            segment: '',
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
                segment: this.state.segment,
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
                        <Label>User Segment</Label>
                        <MySelect
                            name="segment"
                            value={this.state.segment}
                            onChange={this.handleInputChange}
                        >
                            <option value="" disabled selected>Select a segment</option>
                            <option value="Mediator">Mediator</option>
                            <option value="Merchant">Merchant</option>
                            <option value="Customer">Customer</option>
                        </MySelect>
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