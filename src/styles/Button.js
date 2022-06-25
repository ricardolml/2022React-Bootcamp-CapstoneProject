import styled from 'styled-components';
import { colors } from './_variables';

export const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: ${colors.Gray[100]};
  background-color: ${colors.Orange[600]};
  &:hover {
    background-color: ${colors.Orange[500]};
  }
`;

export default Button;
