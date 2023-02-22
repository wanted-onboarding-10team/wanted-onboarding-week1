import { useNavigate } from 'react-router-dom';
import useAuthForm from '../utils/hooks/useAuthForm';

function SignUpPage() {
  const { setId, setPassword, isCorrect, error, handleSubmit } = useAuthForm();
  const navigate = useNavigate();
  return (
    <div>
      <form onSubmit={() => handleSubmit(onValid)}></form>
      <input type="text" onChange={e => setId(e.target.value)} />
      <input type="text" onChange={e => setPassword(e.target.value)} />
    </div>
  );
}

export default SignUpPage;
