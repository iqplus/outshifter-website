import styled from 'styled-components';

export const StyledTermsData = styled.div`

    .box-wrapper {
        width: 265px;
        display: inline-block;
        margin-right: 100px;

        img {
            width: 30px;
            position: relative;
            bottom: 3px;
        }
        svg {
            width: 30px;
            font-size: 22px;
            position: relative;
            top: 1px;
        }
        h6 {
            display: inline;
            margin-left: 25px;
            @media only screen and (max-width: 991px) and  (min-width: 768px) {
                font-size: 0.8rem;
            }
        }
        a:hover {
            text-decoration: none;
        }
        
        @media only screen and (max-width: 1399px) {
            display: table-cell;
            margin-right: 0px;
        }
    }

    @media only screen and (max-width: 1399px) {
        .box-wrapper-right {
            position: relative;
            left: 20px;
        }
    }

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
    .terms-titel button {
        padding: 4px 20px;
        position: absolute;
        top: 105px;
    }
    .terms-titel h3::before { 
        display: block; 
        content: " "; 
        margin-top: -110px; 
        height: 150px; 
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

    #all-solutions {
        display: ${({ info0 }) => info0 ? 'blocked' : 'none'};
        padding-bottom: 100px;
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