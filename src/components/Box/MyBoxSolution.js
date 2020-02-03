import React from 'react';
import styled from 'styled-components';


const StyledBox = styled.div`

    box-shadow: 0 0 0 1px rgba(50,50,93,.05), 0 2px 5px 0 rgba(50,50,93,.1), 0 1px 1px 0 rgba(0,0,0,.07);
    transition: box-shadow 0.5s;
    padding: 20px;
    border-radius: 6px;
    width: 100%;
    background: white;
    text-align: left;

    &:hover {
        transition: box-shadow 1s;
        box-shadow: 0 0 0 1px rgba(50,50,93,.05), 0 7px 14px 0 rgba(50,50,93,.1), 0 3px 6px 0 rgba(0,0,0,.07);
    }

    @media only screen and (max-width: 991px) and  (min-width: 768px) {
        padding: 10px;
    }
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
