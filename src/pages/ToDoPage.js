import React, { useContext, useState } from 'react';
import { createTodoApi, getTodosApi } from '../api/todo';
import TodoContent from '../components/todo/TodoContent';
import useGetApi from '../utils/hooks/useGetApi';
import * as S from '../styles/todoStyle';
import { AuthContext } from '../utils/auth/AuthContext';

const Todo = () => {
  const [enterTodo, setEnterTodo] = useState('');
  const { data, isLoading, refetch } = useGetApi(getTodosApi);
  const { logout } = useContext(AuthContext);

  const createTodo = async () => {
    if (enterTodo === '') return alert('할 일을 입력해주세요');
    await createTodoApi(enterTodo);
    setEnterTodo('');
    refetch();
  };

  return (
    <S.TodoContainer>
      <S.StyledA onClick={logout}>로그아웃</S.StyledA>
      <h3>To-Do List</h3>
      <S.TodoCreateBoxBlock>
        <S.TodoForm>
          <input
            data-testid="new-todo-input"
            placeholder="할 일을 입력해주세요"
            onChange={e => setEnterTodo(e.target.value)}
            value={enterTodo}
            type="text"
          />
          <button onClick={createTodo} data-testid="new-todo-add-button">
            ADD
          </button>
        </S.TodoForm>
      </S.TodoCreateBoxBlock>
      {isLoading && <p>로딩중</p>}
      {!isLoading && data && (
        <div>
          {data?.map((todo, index) => {
            return <TodoContent data={todo} key={index} refetch={refetch} />;
          })}
        </div>
      )}
      {!isLoading && data.length === 0 && <p>할 일 목록이 없습니다</p>}
    </S.TodoContainer>
  );
};

export default Todo;
