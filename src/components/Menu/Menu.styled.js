import styled from 'styled-components';

export const StyledMenu = styled.nav`

    @media only screen and (min-width: 768px) {
        .menu-desktop {
            margin: 0px;
            padding-left: 25px;
        }
        .menu-item {
            text-transform: capitalize;
        }
        .menu-desktop a {
            pointer-events: ${({ open }) => open ? 'inherit' : 'none' }; 
            cursor: ${({ open }) => open ? 'pointer' : 'default'};
            padding-right: 25px;
            color: #4A4A4A;;
        }
        .menu-desktop a:hover {
            text-decoration: none;
        }
        .menu-0 {
            transition: ${({ open }) => open ? 'opacity 0.2s linear 0.6s' : 'opacity 0.2s linear 0.1s'};
            opacity: ${({ open }) => open ? '1' : '0'};
            line-height: 48px;
        }
        .menu-1 {
            transition: opacity 0.2s linear 0.5s;
            transition: ${({ open }) => open ? 'opacity 0.2s linear 0.5s' : 'opacity 0.2s linear 0.2s'};
            opacity: ${({ open }) => open ? '1' : '0'};
            line-height: 48px;
        }
        .menu-2 {
            transition: ${({ open }) => open ? 'opacity 0.2s linear 0.4s' : 'opacity 0.2s linear 0.3s'};
            opacity: ${({ open }) => open ? '1' : '0'};
            line-height: 48px;
        }
        .menu-3 {
            transition: ${({ open }) => open ? 'opacity 0.2s linear 0.3s' : 'opacity 0.2s linear 0.4s'};
            opacity: ${({ open }) => open ? '1' : '0'};
            line-height: 48px;
        }
        .menu-4 {
            transition: ${({ open }) => open ? 'opacity 0.2s linear 0.2s' : 'opacity 0.2s linear 0.5s'};
            opacity: ${({ open }) => open ? '1' : '0'};
            line-height: 48px;
        }
        .menu-5 {
            transition: ${({ open }) => open ? 'opacity 0.2s linear 0.2s' : 'opacity 0.2s linear 0.5s'};
            opacity: ${({ open }) => open ? '1' : '0'};
            line-height: 48px;
        }
    }

    @media only screen and (max-width: 767px) {
        .menu-0 {display: none;}
        .menu-1 {display: none;}
        .menu-2 {display: none;}
        .menu-3 {display: none;}
        .menu-4 {display: none;}
        .menu-5 {display: none;}

        {/*
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: ${({ theme }) => theme.primaryLight};
        height: 100vh;
        text-align: left;
        padding: 2rem;
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 0.3s ease-in-out;
        width: 100%;
      
        a {
            font-size: 2rem;
            text-transform: uppercase;
            padding: 2rem 0;
            font-weight: bold;
            letter-spacing: 0.5rem;
            color: ${({ theme }) => theme.primaryDark};
            text-decoration: none;
            transition: color 0.3s linear;
            text-align: center;
            font-size: 1.5rem;
      
            &:hover {
                color: ${({ theme }) => theme.primaryHover};
            }
        }*/

        }
    }

    }


`;