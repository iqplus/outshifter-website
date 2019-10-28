import styled from 'styled-components';

export const StyledMenuName = styled.span`

    transition: ${({ open }) => open ? 'opacity 0.2s linear 0.1s' : 'opacity 0.2s linear 0.5s'};
    opacity: ${({ open }) => open ? '0' : '1'};
    position: relative;
    left: 300px;
    line-height: 48px;
    color: #4A4A4A;

    @media only screen and (max-width: 1024px) {
    
        display: none;

    }

`;