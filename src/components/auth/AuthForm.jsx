import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { loginUserApi, registerUserApi } from '../../api/auth';
import { LoginContext } from '../../App';
import { StyledInput } from '../../styles/authStyle';
import LargeButton from '../buttons/LargeButton';

const AuthForm = ({ mode }) => {
  const [idError, setIdError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [enterId, setEnterId] = useState();
  const [enterPassword, setEnterPassword] = useState();
  const [, setIsLogin] = useContext(LoginContext);
  const navigate = useNavigate();

  const idValidate = e => {
    const ID_REGEX = /@/;
    setEnterId(e.target.value);
    if (e.target.value === '') return setIdError('아이디를 입력해주세요');
    if (ID_REGEX.test(e.target.value)) return setIdError(true);
    setIdError('@를 포함해주세요');
  };

  const passwordValidate = e => {
    const PASSWORD_REGEX = /\w{8,}/;
    setEnterPassword(e.target.value);
    if (e.target.value === '') return setPasswordError('비밀번호를 입력해주세요');
    if (PASSWORD_REGEX.test(e.target.value)) return setPasswordError(true);
    setPasswordError('비밀번호는 8자이상 입니다');
  };

  const handleSubmit = async () => {
    try {
      if (mode === 'login') {
        const result = await loginUserApi(enterId, enterPassword);
        localStorage.setItem('jwtToken', result.access_token);
        setIsLogin(true);
        navigate('/todo');
        return;
      }

      await registerUserApi(enterId, enterPassword);
      navigate('/signin');
    } catch (error) {
      if (error.status === 401) {
        return alert('비밀번호를 확인해주세요');
      }
      alert(error.data.message);
    }
  };

  return (
    <LoginContainer>
      <Box>
        <InforWord>아이디</InforWord>
        <StyledInput type="text" onChange={idValidate} data-testid="email-input"></StyledInput>
        <ErrorMessage>{idError}</ErrorMessage>
      </Box>
      <Box>
        <InforWord>비밀번호</InforWord>
        <StyledInput
          type="password"
          onChange={passwordValidate}
          data-testid="password-input"
        ></StyledInput>
        <ErrorMessage>{passwordError}</ErrorMessage>
      </Box>
      <Box>
        {/* <LargeButton
          color={mode === 'login' ? 'rgb(166, 141, 202)' : 'rgb(192, 222, 255)'}
          disabled={idError === true && passwordError === true ? false : true}
          onClick={handleSubmit}
          data-testid="signin-button"
          mode={mode}
        > */}

        {mode === 'login' ? (
          <LargeButton
            color={mode === 'login' ? 'rgb(166, 141, 202)' : 'rgb(192, 222, 255)'}
            disabled={idError === true && passwordError === true ? false : true}
            onClick={handleSubmit}
            data-testid="signin-button"
            mode={mode}
          />
        ) : (
          <LargeButton
            color={mode === 'login' ? 'rgb(166, 141, 202)' : 'rgb(192, 222, 255)'}
            disabled={idError === true && passwordError === true ? false : true}
            onClick={handleSubmit}
            data-testid="signin-button"
            mode={mode}
          />
        )}

        {mode === 'register' ? '회원가입' : '로그인'}
      </Box>
    </LoginContainer>
  );
};

export default AuthForm;
