import styled from 'styled-components';

export const StyledLoading = styled.div`
    
    visibility: visible;
    opacity: 1;
    transition: opacity 2s linear;
    
`;

export const StyledNotLoading = styled.div`
    
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 2s, opacity 2s linear;
    
`;