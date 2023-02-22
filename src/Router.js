import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './App';
import Middleware from './utils/auth/Middleware';
import * as P from './pages';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" index element={<P.ToDoPage />} />
      <Route path="signup" element={<Middleware component={<P.SignUpPage />} access={true} />} />
      <Route path="signin" element={<Middleware component={<P.SignInPage />} access={true} />} />
      <Route path="todo" element={<Middleware component={<P.ToDoPage />} access={false} />} />
    </Route>
  )
);
