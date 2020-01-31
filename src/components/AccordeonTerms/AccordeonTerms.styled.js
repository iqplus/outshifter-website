import styled from 'styled-components';

export const StyledAccordeonTerms = styled.div`

    width: 100%;

    #general-terms {
        display: ${({ collapsed1 }) => collapsed1 ? 'blocked' : 'none'};
    }
    #privacy-policy {
        display: ${({ collapsed2 }) => collapsed2 ? 'blocked' : 'none'};
    }
    #transactions {
        display: ${({ collapsed3 }) => collapsed3 ? 'blocked' : 'none'};
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
    .sidebar-item svg {
        padding-right: 15px;
        width: 36px;
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