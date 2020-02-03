import styled from 'styled-components';

export const StyledAccordeonTerms = styled.div`

    width: 100%;

    #about-outshifting {
        display: ${({ collapsed1 }) => collapsed1 ? 'blocked' : 'none'};
    }
    #getting-started {
        display: ${({ collapsed2 }) => collapsed2 ? 'blocked' : 'none'};
    }
    #account {
        display: ${({ collapsed3 }) => collapsed3 ? 'blocked' : 'none'};
    }
    #listings {
        display: ${({ collapsed4 }) => collapsed4 ? 'blocked' : 'none'};
    }
    #sourcing {
        display: ${({ collapsed5 }) => collapsed5 ? 'blocked' : 'none'};
    }
    #channels {
        display: ${({ collapsed6 }) => collapsed6 ? 'blocked' : 'none'};
    }
    #orders {
        display: ${({ collapsed7 }) => collapsed7 ? 'blocked' : 'none'};
    }
    #shipping {
        display: ${({ collapsed8 }) => collapsed8 ? 'blocked' : 'none'};
    }
    #returns {
        display: ${({ collapsed9 }) => collapsed9 ? 'blocked' : 'none'};
    }
    #payments {
        display: ${({ collapsed10 }) => collapsed10 ? 'blocked' : 'none'};
    }
    #service-fee {
        display: ${({ collapsed11 }) => collapsed11 ? 'blocked' : 'none'};
    }

    .terms-titel {
        padding-top: 50px;
    }
    .sidebar-item-first {
        border-top: 1px solid #D8D8D8;
    }
    .sidebar-item {
        border-bottom: 1px solid #D8D8D8;
        padding-top: 25px;
        padding-bottom: 25px;
        color: #4A4A4A;
    }
    .sidebar-item img {
        height: 30px;
        padding-right: 15px;
    }
    .sidebar-item svg {
        margin-right: 15px;
        color: #5873e5;
        font-size: 30px;
        position: relative;
        top: 5px;
    }
    h5 {
        color: #9B9B9B;
        padding-bottom: 15px;
        padding-top: 25px;
    }
    .terms-titel-2 h5 {
        color: #4A4A4A;
    }
    .terms-description h5 {
        color: #4A4A4A;
    }
    a {
        color: #4A4A4A;
    }
    a:hover {
        color: #4A90E2;
        text-decoration: none;
        cursor: pointer;
    }

    @media only screen and (min-width: 768px) {
        display: none;
    }

`;