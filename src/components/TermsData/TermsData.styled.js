import styled from 'styled-components';

export const StyledTermsData = styled.div`

    padding-top: 25px;

    margin-left: 30%;

    .terms-description {
        padding-top: 25px;
    }
    .terms-description h5 {
        padding-bottom: 15px;
    }
    p {
        color: #4A4A4A;
    }
    #general-terms {
        display: ${({ info1 }) => info1 ? 'blocked' : 'none'};
    }
    #privacy-policy {
        display: ${({ info2 }) => info2 ? 'blocked' : 'none'};
    }

    @media only screen and (max-width: 767px) {
        display: none;
    }

`;