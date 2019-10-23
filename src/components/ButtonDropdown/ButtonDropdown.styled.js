import styled from 'styled-components';

export const StyledButtonDropdown = styled.button`

    display: inline-block;
    border-radius: 30px;
    border: none;
    color: #4A4A4A;
    box-shadow: 0px 0 5px 0 #E1E8EC;
    font-size: 14px;
    padding: 5px 5px 5px 15px;

    svg {
        font-size: 22px;
        position: relative;
        bottom: 1px;
        color: #D8D8D8;
        transition: color 0.6s ease-in-out, transform 0.6s ease-in-out;
        color: ${({ buttonClicked }) => buttonClicked ? '#4A90E2' : '#D8D8D8'};
        transform: ${({ buttonClicked }) => buttonClicked ? 'rotate(90deg)' : 'rotate(0deg)'};
    }

    &:hover {
        transition: color 0.6s ease-in-out;
    }

    &:focus {
        outline: none;
    }
`;