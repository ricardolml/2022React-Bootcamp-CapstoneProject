import styled from 'styled-components';
import { colors } from '../../styles/_variables';

const Card = styled.div`
  border: 1px solid ${colors.Gray[300]};
  border-radius: 5px;
  box-shadow: 0px;
  box-shadow: 5px 5px 5px ${colors.Gray[200]};
  position: relative;
  min-width: 18rem;
  max-width: 18rem;
  max-height: 450px;
  min-height: 450px;
  /* cursor: pointer; */
  .img {
    position: relative;
    .fav {
      position: absolute;
      padding-top: 10px;
      right: 5%;
      font-size: 20px;
    }
  }
  img {
    width: 100%;
    object-fit: cover;
    max-height: 280px;
    border-radius: 5px;
  }

  .body {
    padding-left: 10px;
    padding-right: 10px;
    h5 {
      color: ${colors.Gray[500]};
      margin: 0;
      height: 20px;
      padding-top: 10px;
      padding-bottom: 10px;
    }

    .content {
      display: flex;
      justify-content: space-between;
      position: relative;
    }

    .opt {
      display: flex;
      width: 100%;
      button {
        width: 50px;
        height: 50px;
        border: 1px solid ${colors.Gray[100]};
        margin-left: auto;
        border-radius: 100%;
        background-color: ${colors.Gray[200]};
        &:hover {
          background-color: ${colors.Gray[300]};
        }
      }
    }
  }
`;

export default Card;
