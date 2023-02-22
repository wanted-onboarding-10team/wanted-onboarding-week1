import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext.js';

function Middleware({ component, access }) {
  const { auth } = useContext(AuthContext);
  if (access) {
    if (auth) {
      return <Navigate to="/todo" />;
    }
    return component;
  }
  if (!auth) {
    return <Navigate to="/signin" />;
  }
  return component;
}

export default Middleware;
