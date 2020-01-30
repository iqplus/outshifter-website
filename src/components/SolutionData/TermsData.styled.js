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

    .disclaimer {
        color: grey;
        font-size: 12px;
    }

    #about-outshifting {
        display: ${({ info1 }) => info1 ? 'blocked' : 'none'};
        padding-bottom: 500px;
    }
    #getting-started {
        display: ${({ info2 }) => info2 ? 'blocked' : 'none'};
        padding-bottom: 500px;
    }
    #account {
        display: ${({ info3 }) => info3 ? 'blocked' : 'none'};
        padding-bottom: 500px;
    }
    #listings {
        display: ${({ info4 }) => info4 ? 'blocked' : 'none'};
        padding-bottom: 500px;
    }
    #sourcing {
        display: ${({ info5 }) => info5 ? 'blocked' : 'none'};
        padding-bottom: 500px;
    }
    #channels {
        display: ${({ info6 }) => info6 ? 'blocked' : 'none'};
        padding-bottom: 500px;
    }
    #orders {
        display: ${({ info7 }) => info7 ? 'blocked' : 'none'};
        padding-bottom: 500px;
    }
    #shipping {
        display: ${({ info8 }) => info8 ? 'blocked' : 'none'};
        padding-bottom: 500px;
    }
    #returns {
        display: ${({ info9 }) => info9 ? 'blocked' : 'none'};
        padding-bottom: 500px;
    }
    #payments {
        display: ${({ info10 }) => info10 ? 'blocked' : 'none'};
        padding-bottom: 500px;
    }
    #service-fee {
        display: ${({ info11 }) => info11 ? 'blocked' : 'none'};
        padding-bottom: 500px;
    }

    @media only screen and (max-width: 767px) {
        display: none;
    }

`;