import styled from 'styled-components';

/* 화면 중앙 전체 채우기 */
const BasicTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${({ theme }) => theme.gray[2]};

  /*flex로 내부 내용 중앙 정렬*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-weight: 500;
`;

/* 흰색 박스 */
const WhiteBox = styled.div`
  width: 500px;
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.02);
  padding: 2rem;
  background: white;
  border-radius: 2px;
`;

function BasicTemplate({ children }) {
  return (
    <BasicTemplateBlock>
      <WhiteBox>{children}</WhiteBox>
    </BasicTemplateBlock>
  );
}

export default BasicTemplate;
