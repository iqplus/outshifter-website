import styled from 'styled-components';

export const StyledSidebar = styled.nav`

    position: fixed;
    top: 75px;
    bottom: 100px;
    overflow: scroll;
    
    width: 25%;
    max-width: 360px;
    border-right: 1px solid #D8D8D8;

    .sidebar-item-first {
        border-top: 1px solid #D8D8D8;
    }
    .sidebar-item {
        border-bottom: 1px solid #D8D8D8;
        padding-top: 25px;
        padding-bottom: 25px;
        color: #4A4A4A;
        width: 95%;
    }
    .sidebar-item svg {
        font-size: 26px;
        padding-right: 15px;
        width: 36px;
        position: relative;
        top: 3px;    
    }
    .sidebar-item img {
        max-width: 30px;
        margin-right: 10px;
    }
    .undermeny {
        padding-top: 25px;
    }
    .undermeny li {
        padding-bottom: 15px;
    }
    .undermeny1 {
        display: ${({ collapsed1 }) => collapsed1 ? 'blocked' : 'none'};
    }
    .undermeny2 {
        display: ${({ collapsed2 }) => collapsed2 ? 'blocked' : 'none'};
    }
    .undermeny3 {
        display: ${({ collapsed3 }) => collapsed3 ? 'blocked' : 'none'};
    }
    .undermeny4 {
        display: ${({ collapsed4 }) => collapsed4 ? 'blocked' : 'none'};
    }
    .undermeny5 {
        display: ${({ collapsed5 }) => collapsed5 ? 'blocked' : 'none'};
    }
    .undermeny6 {
        display: ${({ collapsed6 }) => collapsed6 ? 'blocked' : 'none'};
    }
    .undermeny7 {
        display: ${({ collapsed7 }) => collapsed7 ? 'blocked' : 'none'};
    }
    .undermeny8 {
        display: ${({ collapsed8 }) => collapsed8 ? 'blocked' : 'none'};
    }
    .undermeny9 {
        display: ${({ collapsed9 }) => collapsed9 ? 'blocked' : 'none'};
    }
    .undermeny10 {
        display: ${({ collapsed10 }) => collapsed10 ? 'blocked' : 'none'};
    }
    .undermeny11 {
        display: ${({ collapsed11 }) => collapsed11 ? 'blocked' : 'none'};
    }
    .sidebar-header {
        padding-top: 50px;
        padding-bottom: 25px;
    }

    h5 {
        color: #9B9B9B;
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

    @media only screen and (max-width: 767px) {
        display: none;
    }

`;