import styled from 'styled-components';

export const StyledTermsData = styled.div`

    padding-top: 25px;
    margin-left: 30%;

    .terms-titel-2 {
        padding-top: 25px;
        padding-bottom: 25px;
    }
    .terms-description h5 {
        padding-bottom: 15px;
        color: #4A4A4A;
    }
    .terms-description {
        padding-bottom: 25px;
    }
    .terms-titel h3::before { 
        display: block; 
        content: " "; 
        margin-top: -110px; 
        height: 110px; 
        visibility: hidden; 
        pointer-events: none;
    }
    .terms-description h5::before { 
        display: block; 
        content: " "; 
        margin-top: -110px; 
        height: 110px; 
        visibility: hidden; 
        pointer-events: none;
    }
    p {
        color: #4A4A4A;
    }
    #general-terms {
        display: ${({ info1 }) => info1 ? 'blocked' : 'none'};
        padding-bottom: 500px;
    }
    #privacy-policy {
        display: ${({ info2 }) => info2 ? 'blocked' : 'none'};
        padding-bottom: 500px;
    }
    #transactions {
        display: ${({ info3 }) => info3 ? 'blocked' : 'none'};
        padding-bottom: 500px;
    }

    @media only screen and (max-width: 767px) {
        display: none;
    }

`;