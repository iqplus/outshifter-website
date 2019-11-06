import React from "react"
import styled from 'styled-components';

import Button from "../Button/Button"

const FormGroup = styled.div`
    display: block;
    width: 100%;
    max-width: 991px;
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

   
    render() {
        return (
            
            <FormGroup>
        
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <Label>Your Name</Label>
                        <MyInput type="text" />
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

        );
    }
}

export default MyContact