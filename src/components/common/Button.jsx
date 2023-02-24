import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${({ theme }) => theme.gray[8]};
  &:hover {
    background: ${({ theme }) => theme.gray[6]};
  }

  ${props =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${props =>
    props.cyan &&
    css`
      background: ${({ theme }) => theme.cyan[5]};
      &:hover {
        background: ${({ theme }) => theme.cyan[4]};
      }
    `}
`;

const Button = props => <StyledButton {...props} />;

export default Button;
