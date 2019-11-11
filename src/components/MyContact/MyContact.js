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
    @media only screen and (max-width: 991px) {
        .submit-button {text-align: center;}
    }
`;

const Label = styled.label`
    display: block;
`;

const MyInput = styled.input`
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

const MyTextArea = styled.textarea`
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

state= {
    name: 'angelo sepulveda',
    email: 'angelo.sv@iqplus.no',
    segment: 'esi',
    subject: 'sdaoimmds', 
    message:  'sdfdf sdflk sdk fsldf'    
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
        console.log(response);
    })
    .catch(function (response) {
        console.log(response);
    });

    }
   
    render() {
        return (
            <form onSubmit={this.onFormSubmit} method="post">

            <FormGroup>
        
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <Label>Your Name</Label>
                            <MyInput type="email" name="email" />
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <Label>User Segment</Label>
                        <MyInput type="text" />
                    </div>
                </div>
                <Label>Email</Label>
                <MyInput type="text" />
                <Label>Subject</Label>
                <MyInput type="text" />
                <Label>Message</Label>
                <MyTextArea></MyTextArea>
                <div className="row submit-button">
                    <div className="col">
                        <Button type="submit">Submit</Button>
                    </div>
                </div>
        
            </FormGroup>
</form>
        );
    }
}

export default MyContact