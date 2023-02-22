import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { AuthProvider } from './utils/auth/AuthContext.js';
import { router } from './Router';
import { GlobalStyle } from './styles/globalStyle.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
