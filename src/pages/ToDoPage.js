import React, { useState } from 'react';
import styled from 'styled-components';
import { createTodoApi, getTodosApi } from '../api/todo';
import TodoContent from '../components/todo/TodoContent';
import useGetApi from '../utils/hooks/useGetApi';

const Todo = () => {
  // const [todos, setTodos] = useState([]);
  const [enterTodo, setEnterTodo] = useState('');
  const { data, isLoading, refetch } = useGetApi(getTodosApi);

  const createTodo = async () => {
    if (enterTodo === '') return alert('할 일을 입력해주세요');
    await createTodoApi(enterTodo);
    setEnterTodo('');
    refetch();
  };

  return (
    <TodoContainer>
      <TodoInputContainer>
        <TodoInput
          data-testid="new-todo-input"
          placeholder="할 일을 입력해주세요"
          onChange={e => setEnterTodo(e.target.value)}
          value={enterTodo}
          type="text"
        />
        <SubmitButton onClick={createTodo} data-testid="new-todo-add-button">
          작성하기
        </SubmitButton>
      </TodoInputContainer>
      {isLoading && <div>로딩중</div>}
      {!isLoading && data && (
        <TodoList>
          {data?.map((todo, index) => {
            return <TodoContent data={todo} key={index} refetch={refetch} />;
          })}
        </TodoList>
      )}
      {!isLoading && data.length === 0 && <div>할 일 목록이 없습니다</div>}
    </TodoContainer>
  );
};

const TodoInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TodoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const TodoInput = styled.input`
  width: 80%;
  height: 60px;
  padding: 10px;
  border: none;
  border-bottom: 2px solid grey;
  outline: none;
  &:focus {
    border-color: rgb(192, 222, 255);
  }
`;
const SubmitButton = styled.button`
  width: 20%;
  background-color: rgba(192, 222, 255, 0.2);
  border-radius: 12px;
`;
const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export default Todo;
