import { useNavigate } from 'react-router-dom';
import useAuthForm from '../utils/hooks/useAuthForm';

import React from 'react';

function SignInPage() {
  const { setId, setPassword, isCorrect, error, handleSubmit } = useAuthForm();
  const navigate = useNavigate();

  return <div>SignInPage</div>;
}

export default SignInPage;
