import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: relative;
  top: 8px;
  float: right;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: linear-gradient(45.36deg, #4D88EB 0%, #3DDFF4 100%);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  transition: transform 1.2s;

  @media only screen and (min-width: 768px) {
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(1000%)'};
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