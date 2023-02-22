import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthForm from '../../utils/hooks/useAuthForm';
import LargeButton from './LargeButton';

const AuthForm = ({ mode }) => {
  const { setId, setPassword, isCorrect, error, handleSubmit } = useAuthForm();
  const navigate = useNavigate();

  const onValid = async ({ id, password }) => {
    try {
      if (mode === 'login') {
        // const result = await loginUserApi(id, password);
        // localStorage.setItem('jwtToken', result.access_token);
        navigate('/todo');
        return;
      }

      // await registerUserApi(id, password);
      navigate('/signin');
    } catch (error) {
      if (error.status === 401) {
        return alert('비밀번호를 확인해주세요');
      }
      alert(error.data.message);
    }
  };

  return (
    <form onSubmit={() => handleSubmit(onValid)}>
      <input type="text" onChange={e => setId(e.target.value)} data-testid="email-input"></input>
      <p>{error.id}</p>
      <input
        type="password"
        onChange={e => setPassword(e.target.value)}
        data-testid="password-input"
      ></input>
      <p>{error.password}</p>
      <button type="submit">제출</button>
      {mode === 'login' ? (
        <LargeButton
          color={mode === 'login' ? 'rgb(166, 141, 202)' : 'rgb(192, 222, 255)'}
          disabled={isCorrect}
          data-testid="signin-button"
        >
          로그인
        </LargeButton>
      ) : (
        <LargeButton
          color={mode === 'login' ? 'rgb(166, 141, 202)' : 'rgb(192, 222, 255)'}
          disabled={isCorrect}
          data-testid="signin-button"
          mode={mode}
        >
          회원가입
        </LargeButton>
      )}
    </form>
  );
};

export default AuthForm;
