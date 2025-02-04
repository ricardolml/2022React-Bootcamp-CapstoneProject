import styled from 'styled-components';
import { colors } from './_variables';

export const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: white;
  background-color: ${colors.primary};
  &:disabled {
    background-color: ${colors.Orange[300]};
  }
  &:hover:enabled {
    background-color: ${colors.hover};
  }
`;

export default Button;
