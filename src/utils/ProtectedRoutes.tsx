import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import * as jwt from 'jwt-decode';

interface DecodedToken {
  role: string;
}

interface ProtectedRouteProps {
  children: ReactNode;
  roles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, roles }) => {
  const token = Cookies.get('authToken');

  if (!token) {
    return <Navigate to="/login" replace />;
  } else {
    try {
      const decoded: DecodedToken = jwt.jwtDecode(token); // Decode the token
      if (roles && !roles.includes(decoded.role)) {
        return <Navigate to="/dashboard/forbidden" replace />;
      } else {
        return <>{children}</>;
      }
    } catch (error) {
      // Handle any decoding errors
      Cookies.remove('authToken'); // Remove invalid token
      return <Navigate to="/login" replace />;
    }
  }
};

export default ProtectedRoute;
