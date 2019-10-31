import styled from 'styled-components';

export const StyledSidebar = styled.nav`

    position: fixed;
    top: 75px;
    bottom: 0;
    overflow: scroll;

    width: 25%;

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
    .sidebar-header {
        padding-top: 50px;
        padding-bottom: 25px;
    }

    h5 {
        color: #9B9B9B;
    }
    a {
        color: #4A4A4A;
    }
    a:hover {
        color: #4A4A4A;
        opacity: 0.8;
        text-decoration: none;
        cursor: pointer;
    }

    @media only screen and (max-width: 767px) {
        display: none;
    }

`;