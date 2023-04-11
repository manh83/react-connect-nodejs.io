import { Navigate } from 'react-router-dom';

const requireAdminAuth = () => {
  const isLoggedIn = localStorage.getItem('login');
  const token = isLoggedIn && JSON.parse(isLoggedIn);

  if (!isLoggedIn || token.role !== 'admin') {
    return <Navigate to="/" />;
  }
};

export default requireAdminAuth;
