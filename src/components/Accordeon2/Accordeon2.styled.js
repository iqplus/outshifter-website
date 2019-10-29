import styled from 'styled-components';

export const StyledAccordeon = styled.div`

    max-width: 100%;

    .button-dropdown {
        padding-top: 25px;
        padding-bottom: 25px;
        text-align: center;
    }

    .drop-center {
        text-align: center;
    }
    .drop-right {
        text-align: right;
    }

    @media only screen and (min-width: 992px) {
        .row-box {
            padding-right: 15px;
        }
    }

    @media only screen and (max-width: 1199px) and (min-width: 991px) {
        .button-dropdown .col-md {
            padding-right: 0px;
            padding-left: 0px;
        }
        .button-dropdown button {
            padding: 7px 5px 7px 10px;
        }
    }

    @media only screen and (max-width: 767px) {
        .button-dropdown {
            text-align: center;
        }
        .button-dropdown button {
            width: 100%;
            margin-bottom: 10px;
        }
    }

`;