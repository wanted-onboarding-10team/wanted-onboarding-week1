import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '../App';
import NotFound from '../pages/error/NotFound';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import ToDoPage from '../pages/ToDoPage';
import Middleware from './auth/Middleware';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<NotFound />}>
      <Route path="" index element={<ToDoPage />} />
      <Route path="signup" element={<Middleware component={<SignUpPage />} access={true} />} />
      <Route path="signin" element={<Middleware component={<SignInPage />} access={true} />} />
      <Route path="todo" element={<Middleware component={<ToDoPage />} access={false} />} />
    </Route>
  )
);
