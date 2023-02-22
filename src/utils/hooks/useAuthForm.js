import { useCallback, useEffect, useState } from 'react';

function useAuthForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [error, setError] = useState({ id: null, password: null });
  const PASSWORD_REGEX = /\w{8,}/;
  const ID_REGEX = /@/;

  const idValidate = useCallback(
    e => {
      if (id === '') {
        return setError(prev => {
          const result = { ...prev, id: '아이디를 입력해주세요' };
          return result;
        });
      }

      if (ID_REGEX.test(id)) {
        return setError(prev => {
          const result = { ...prev, id: true };
          return result;
        });
      }

      setError(prev => {
        const result = { ...prev, id: '@를 포함해주세요' };
        return result;
      });
    },
    [id]
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
    async fn => {
      fn({ id, password });
    },
    [id, password]
  );

  useEffect(() => {
    idValidate();
    setIsCorrect(() => {
      if (ID_REGEX.test(id) && PASSWORD_REGEX.test(password)) return false;
      return true;
    });
  }, [id]);

  useEffect(() => {
    passwordValidate();
    setIsCorrect(() => {
      if (ID_REGEX.test(id) && PASSWORD_REGEX.test(password)) return false;
      return true;
    });
  }, [password]);

  useEffect(() => {
    setError(prev => {
      const result = { ...prev, id: null, password: null };
      return result;
    });
  }, []);

  return { setId, setPassword, isCorrect, error, handleSubmit };
}

export default useAuthForm;
