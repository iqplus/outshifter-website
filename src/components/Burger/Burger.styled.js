import styled from 'styled-components';

export const StyledBurger = styled.button.attrs(props => ({
position: props.position || 'relative',
top: props.top || '8px',
right: props.right || 'auto',
}))`
  right: ${props => props.right};
  position: ${props => props.position};
  top: ${props => props.top};
  float: right;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  right: ${props => props.right};

  background: linear-gradient(45.36deg, #4D88EB 0%, #3DDFF4 100%);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  transition: transform 1.2s;

  @media only screen and (min-width: 768px) {
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(1300%)'};
  }

  @media only screen and (max-width: 768px) {
    background: ${({ open }) => open ? 'none' : 'linear-gradient(45.36deg, #4D88EB 0%, #3DDFF4 100%)'};
  }

  &:focus {
    outline: none;
  }
  
  div {
    width: 1rem;
    height: 2px;
    background: ${({ theme }) => theme.white};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    left: ${({ open }) => open ? '10px' : '8px'};

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      top: ${({ open }) => open ? '7px' : '6px'}
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      bottom: ${({ open }) => open ? '5px' : '6px'};
    }
  }
`;