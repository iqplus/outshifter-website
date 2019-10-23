import styled from 'styled-components';

export const StyledAccordeonBox = styled.div`

    box-shadow: 6px 0 5px 0 #E1E8EC;
    padding: 15px;
    border-radius: 7px;

    display: ${({ buttonClicked }) => buttonClicked ? 'block' : 'none'};
   

`;