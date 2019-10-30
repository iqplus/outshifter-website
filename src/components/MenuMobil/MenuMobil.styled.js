import styled from 'styled-components';

export const StyledMenuMobil = styled.nav`

    @media only screen and (min-width: 768px) {
        display: none;
    }

    @media only screen and (max-width: 767px) {

        display: flex;
        flex-direction: column;
        justify-content: center;
        background: linear-gradient(45.36deg,#4D88EB 0%,#3DDFF4 100%);
        text-align: center;
        padding: 2rem;
        position: absolute;
        z-index: 3;
        top: 0;
        left: 0;
        transition: transform 0.3s ease-in-out;
        width: 100%;
        height: 100%;
        transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(-100%)'};

        ul {
            list-style: none;
            padding-left: 0px;
        }
        li {
            margin-bottom: 15px;
        }
        a {
            font-size: 2.5rem!important;
            font-weight: 300;
            padding: 2rem 0;
            text-transform: capitalize;
            color: white;
            text-decoration: none;
            transition: color 0.3s linear;
            text-align: center;
            font-size: 1.5rem;
      
            &:hover {
                color: ${({ theme }) => theme.primaryHover};
            }
        }

        .menu-word {
            position: absolute;
            z-index: 3;
            top: 20px;
            left: 20px;
            color: white;
        }
    
    }
`;