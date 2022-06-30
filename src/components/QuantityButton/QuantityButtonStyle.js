import styled from 'styled-components';
import { colors } from '../../styles/_variables';
// import { colors, max_widths } from '../../styles/_variables';

const QuantityButtonStyle = styled.div`
  display: flex;
  gap: 50px;
  .price {
    display: flex;
    flex-direction: column;
    gap: 15px;
    span {
      color: ${colors.Orange[600]};
      font-size: 30px;
    }
  }

  .quantity {
    display: flex;
    flex-direction: column;
    gap: 15px;
    i {
      cursor: pointer;
      color: ${colors.Gray[600]};
      &:hover {
        color: ${colors.Orange[600]};
      }
    }
    .quantityBtn {
      padding: 10px;
      border-radius: 10px;
      background-color: ${colors.Gray[200]};
      display: flex;
      width: auto;
      align-items: center;
      gap: 20px;
    }
  }
`;

export default QuantityButtonStyle;
