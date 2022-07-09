import styled from 'styled-components';
import { colors } from './_variables';

const Input = styled.input`
  border: ${(props) =>
    props.error
      ? `1px solid ${colors.Red[500]}`
      : `1px solid ${colors.Gray[200]}`};
  border-radius: 10px;
  padding: 10px;
  width: 98%;

  &:focus {
    outline: none;
    /* border: 1px solid #9ca3af; */
    border: ${(props) =>
      props.error ? `1px solid ${colors.Red[500]}` : `1px solid #9ca3af`};
    transition: 0.3s ease;
  }
`;
export default Input;
