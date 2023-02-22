import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInApi, signUpApi } from '../../api/auth';
import useAuthForm from '../../utils/hooks/useAuthForm';
import * as S from '../../styles/authStyle';
import { AuthContext } from '../../utils/auth/AuthContext';

const AuthForm = ({ mode }) => {
  const { login } = useContext(AuthContext);
  const { setEmail, setPassword, isCorrect, error, handleSubmit } = useAuthForm();
  const navigate = useNavigate();

  const onValid = async ({ email, password }) => {
    try {
      if (mode === 'login') {
        const { data } = await signInApi({ email, password });
        login(data.access_token);
        navigate('/todo');
      } else {
        await signUpApi({ email, password });
        navigate('/signin');
      }
    } catch (error) {
      if (error.status === 401) {
        return alert('비밀번호를 확인해주세요');
      }
      alert(error.data.message);
    }
  };

  return (
    <S.AuthFormBlock onSubmit={e => handleSubmit(e, onValid)}>
      <h3> {mode === 'login' ? '로그인' : '회원가입'}</h3>

      <S.StyledInput
        type="text"
        onChange={e => setEmail(e.target.value)}
        data-testid="email-input"
        placeholder="이메일"
      />
      <S.WarnMessage>{error.id}</S.WarnMessage>
      <S.StyledInput
        type="password"
        onChange={e => setPassword(e.target.value)}
        data-testid="password-input"
        placeholder="비밀번호"
      />
      <S.WarnMessage>{error.password}</S.WarnMessage>

      {mode === 'login' ? (
        <S.StyledButton type="submit" fullWidth disabled={isCorrect} data-testid="signin-button">
          로그인
        </S.StyledButton>
      ) : (
        <S.StyledButton type="submit" fullWidth disabled={isCorrect} data-testid="signup-button">
          회원가입
        </S.StyledButton>
      )}
      <S.Footer>
        {mode === 'login' ? <a href="/signup">회원가입</a> : <a href="/signin">로그인</a>}
      </S.Footer>
    </S.AuthFormBlock>
  );
};

export default AuthForm;
