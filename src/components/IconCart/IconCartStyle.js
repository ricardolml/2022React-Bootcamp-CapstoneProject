import styled from 'styled-components';
import { colors } from '../../styles/_variables';

const IconCartStyle = styled.div`
  position: relative;
  padding: 15px;
  .end {
    font-size: 20px;
  }
  .numCar {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    background-color: ${colors.primary};
    /* min-width: 22px !important; */
    height: auto;
    text-align: center;
    label {
      text-align: center;
      padding: 5px;
      font-size: 13px;
      color: white;
      font-weight: bold;
    }
  }
`;

export default IconCartStyle;
