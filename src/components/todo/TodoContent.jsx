import React, { useEffect, useState } from 'react';
import { deleteTodoApi, updateTodoApi } from '../../api/todo';
import * as S from '../../styles/todoStyle';

const TodoContent = ({ data, refetch }) => {
  const [isWrite, setIsWrite] = useState(false);
  const [editContent, setEditContent] = useState('');
  const [checked, setChecked] = useState(false);
  const { todo, id, isCompleted } = data;

  const handleCheck = async value => {
    setChecked(value);
    await updateTodoApi(id, editContent, value);
  };

  const handleModify = async () => {
    if (isWrite) {
      if (editContent === '') return alert('할 일을 작성해주세요');
      await updateTodoApi(id, editContent, checked);
      await refetch();
      setIsWrite(false);
      return;
    }

    setIsWrite(!isWrite);
  };

  const handleSubmit = async () => {
    if (isWrite) {
      return setIsWrite(!isWrite);
    }

    await deleteTodoApi(id);
    await refetch();
  };

  useEffect(() => {
    setEditContent(todo);
    setChecked(isCompleted);
  }, [todo, isCompleted]);
  console.error(isWrite);

  return (
    <S.TodoBoxBlock>
      <S.TodoListBlock>
        <input type="checkbox" onChange={e => handleCheck(e.target.checked)} checked={checked} />

        <input
          data-testid="modify-input"
          onChange={e => setEditContent(e.target.value)}
          type="text"
          defaultValue={todo}
          disabled={isWrite ? false : true}
        />

        {isWrite ? (
          <>
            <S.StyledButton data-testid="submit-button" onClick={handleModify}>
              ✅ 확인
            </S.StyledButton>
            <S.StyledButton data-testid="cancel-button" onClick={handleSubmit}>
              ↪️ 취소
            </S.StyledButton>
          </>
        ) : (
          <>
            <S.StyledButton data-testid="modify-button" onClick={handleModify}>
              ✏️ 수정
            </S.StyledButton>

            <S.StyledButton data-testid="delete-button" onClick={handleSubmit}>
              ❌ 삭제
            </S.StyledButton>
          </>
        )}
      </S.TodoListBlock>
    </S.TodoBoxBlock>
  );
};

export default TodoContent;
