import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import App from './App';
import * as P from './pages';
import Middleware from './utils/auth/Middleware';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" index element={<Navigate to="todo" />} />
      <Route path="signup" element={<Middleware component={<P.SignUpPage />} access={true} />} />
      <Route path="signin" element={<Middleware component={<P.SignInPage />} access={true} />} />
      <Route path="todo" element={<Middleware component={<P.ToDoPage />} access={false} />} />
    </Route>
  )
);
