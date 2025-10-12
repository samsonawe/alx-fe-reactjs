import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated, children }) {
  const location = useLocation();

  if (!isAuthenticated) {
    alert(`Access denied to ${location.pathname}. Please log in.`);
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;