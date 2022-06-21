import styled from 'styled-components';
import { colors } from './_variables';

export const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: ${colors.Gray[400]};
  &:hover {
    background-color: ${colors.Gray[300]};
  }
`;

export default Button;
