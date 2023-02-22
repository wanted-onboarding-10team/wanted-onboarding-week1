import React, { useEffect, useState } from 'react';
import { hasAccessAuth, removeAccessToken, setAccessToken } from '../utils';

export const AuthContext = React.createContext({
  auth: false,
  login: access_token => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    if (hasAccessAuth()) {
      setAuth(true);
    }
  }, []);

  const login = access_token => {
    setAccessToken(access_token);
    setAuth(true);
  };

  const logout = () => {
    removeAccessToken();
    setAuth(false);
  };

  return <AuthContext.Provider value={{ auth, login, logout }}>{children}</AuthContext.Provider>;
};
