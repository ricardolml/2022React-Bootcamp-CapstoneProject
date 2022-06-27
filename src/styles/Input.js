import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 10px;
  width: 98%;
  &:focus {
    outline: none;
    border: 1px solid #9ca3af;
    transition: 0.3s ease;
  }
`;
export default Input;
