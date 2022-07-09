import styled from 'styled-components';
import { colors } from '../../styles/_variables';

const CardCheckoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.Orange[50]};
  gap: 15px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    label {
      font-weight: bold;
    }
    border-bottom: 1px solid ${colors.Orange[300]};
    padding-bottom: 20px;
  }
`;
export default CardCheckoutStyle;
