import { Navigate, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode'; // You might need to install this library

function PrivateRoute({ element, ...rest }) {
    const token = localStorage.getItem('authToken');

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // Decode the token to retrieve user's role
    const decoded = jwt_decode(token);

    // If user's role is not 'admin', redirect them to a general page or error page
    if (decoded.role !== 'admin') {
        return <Navigate to="/" replace />;
    }

    return <Route {...rest} element={element} />;
}

export default PrivateRoute;
