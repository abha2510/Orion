import React from 'react';
import { useSelector } from 'react-redux';
import { NavbarContainer, Link } from '../Styles/NavbarStyle';

function Navbar() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // Adjust the path if necessary

    return (
        <NavbarContainer>
            <Link to="/">enhanced faq system</Link>
            <Link to="/">Main FAQ</Link>
            <Link to="/">Detailed Answer</Link>
            { isAuthenticated ? (
              <Link to="/logout">Logout</Link>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Signup</Link>
              </>
            )}
            <Link to="/admin">Admin</Link>
        </NavbarContainer>
    );
}

export default Navbar;
