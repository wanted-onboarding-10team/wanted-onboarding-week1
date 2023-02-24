import { useCallback, useEffect, useState } from 'react';

function useAuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [error, setError] = useState({ email: null, password: null });
  const PASSWORD_REGEX = /\w{8,}/;
  const EMAIL_REGEX = /@/;

  const idValidate = useCallback(
    e => {
      if (email === '') {
        return setError(prev => {
          const result = { ...prev, email: '이메일을 입력해주세요' };
          return result;
        });
      }

      if (EMAIL_REGEX.test(email)) {
        return setError(prev => {
          const result = { ...prev, email: true };
          return result;
        });
      }

      setError(prev => {
        const result = { ...prev, email: '@를 포함해주세요' };
        return result;
      });
    },
    [email]
  );

  const passwordValidate = useCallback(
    e => {
      if (password === '')
        return setError(prev => {
          const result = { ...prev, password: '비밀번호를 입력해주세요' };
          return result;
        });
      if (PASSWORD_REGEX.test(password))
        return setError(prev => {
          const result = { ...prev, password: true };
          return result;
        });
      setError(prev => {
        const result = { ...prev, password: '비밀번호는 8자이상 입니다' };
        return result;
      });
    },
    [password]
  );

  const handleSubmit = useCallback(
    async (e, fn) => {
      e.preventDefault();
      fn({ email, password });
    },
    [email, password]
  );

  useEffect(() => {
    idValidate();
    setIsCorrect(() => {
      if (EMAIL_REGEX.test(email) && PASSWORD_REGEX.test(password)) return false;
      return true;
    });
  }, [email]);

  useEffect(() => {
    passwordValidate();
    setIsCorrect(() => {
      if (EMAIL_REGEX.test(email) && PASSWORD_REGEX.test(password)) return false;
      return true;
    });
  }, [password]);

  useEffect(() => {
    setError(prev => {
      const result = { ...prev, id: null, password: null };
      return result;
    });
  }, []);

  return { setEmail, setPassword, isCorrect, error, handleSubmit };
}

export default useAuthForm;
