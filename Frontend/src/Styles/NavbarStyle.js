// NavbarStyles.js
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid black;
    padding: 1rem;
    position: fixed;
    width: 100%;
    background-color: #2c3e50; 
    margin-bottom:200px

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0.5rem 1rem; 
        justify-content: center;
    }
`;
export const MainContent = styled.div`
    padding-top: 80px;  
`;

export const Link = styled(RouterLink)`
    text-decoration: none;
    color: white;
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 8px;
    transition: background-color 0.2s;
    font-style:uppercase;
    &:hover {
        background-color: #34495e; // Slightly darker blue on hover
    }
`;
