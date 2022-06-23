import styled from 'styled-components';
import { colors } from './_variables';

export const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: ${colors.Gray[600]};
  background-color: ${colors.Gray[300]};
  &:hover {
    background-color: ${colors.Gray[200]};
  }
`;

export default Button;
