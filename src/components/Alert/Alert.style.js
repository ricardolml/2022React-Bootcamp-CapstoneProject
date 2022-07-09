import styled from 'styled-components';
import { colors } from '../../styles/_variables';

const AlertStyle = styled.div`
  margin: 0;
  padding: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(100, 100, 100, 0.5);
  position: fixed;
  z-index: 999999;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .alert {
    padding: 30px;
    width: auto;
    height: auto;
    border: 1px solid ${colors.Gray[200]};
    border-radius: 10px;
    background-color: ${colors.Gray[100]};
  }
`;

export default AlertStyle;
