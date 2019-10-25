import styled from 'styled-components';

export const StyledAccordeonBox = styled.div`

    box-shadow: 6px 0 5px 0 #E1E8EC;
    padding: 15px;
    border-radius: 7px;

    opacity: ${({ buttonClicked }) => buttonClicked ? '1' : '0'};
    transition: ${({ buttonClicked }) => buttonClicked ? 'opacity 4s' : 'opacity 2s'};



    @media only screen and (min-width: 768px) {
        position: absolute;
    }

    @media only screen and (max-width: 768px) {
        display: ${({ buttonClicked }) => buttonClicked ? 'block' : 'none'};
        margin-bottom: 15px;
        margin-left: 15px;
        margin-right: 15px;
    }

`;