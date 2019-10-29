import styled from 'styled-components';

export const StyledLoading = styled.div`
    
    transition: opacity 1s ease-in-out;
    opacity: ${({ renderloading }) => renderloading ? '1' : '0'};

`;