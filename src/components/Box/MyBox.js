import React from 'react';
import styled from 'styled-components';


const StyledBox = styled.div`

    border-color: #EEEEEE;
    box-shadow: 1px 1px 5px 2px #E2E2E2;
    padding: 30px;
    border-radius: 7px;
    width: 100%;
background:white;
    @media only screen and (max-width: 767px) {
        margin-bottom: 15px;
    }

`;

class MyBox extends React.Component {
    render() {
        return(
            <StyledBox>
                {this.props.children}
            </StyledBox>
        );
    }
}

export default MyBox;
