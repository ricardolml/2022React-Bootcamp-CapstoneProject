import styled from 'styled-components';
import { colors } from '../../styles/_variables';

const Card = styled.div`
  border: 1px solid ${colors.Gray[300]};
  border-radius: 5px;
  box-shadow: 0px;
  box-shadow: 5px 5px 5px ${colors.Gray[200]};
  background-position: center center;
  width: 100%;
  .img {
    cursor: pointer;
    position: relative;
    .fav {
      position: absolute;
      padding-top: 10px;
      right: 5%;
      font-size: 20px;
      color: ${(props) => (props.favorite ? colors.primary : 'black')};
      z-index: 999;
      overflow: hidden;
      &:hover {
        color: ${colors.primary};
      }
    }
  }
  img {
    width: 100%;
    object-fit: cover;
    /* max-height: 280px; */
    border-radius: 5px;
  }

  .body {
    padding-left: 10px;
    padding-right: 10px;
    h5 {
      color: black;
      margin: 0;
      height: 20px;
      padding-top: 10px;
      padding-bottom: 10px;
    }

    .content {
      display: flex;
      justify-content: space-between;
      position: relative;
      .category {
        color: ${colors.secondary};
        font-size: 15px;
      }
      .price {
        color: ${colors.primary};
        font-size: 15px;
      }
    }

    .opt {
      display: flex;
      width: 100%;
      margin-bottom: 20px;
      button {
        width: 50px;
        height: 50px;
        border: 1px solid ${colors.Gray[100]};
        margin-left: auto;
        border-radius: 100%;
        background-color: ${colors.Gray[200]};
        /* color: ${colors.primary}; */
        &:hover {
          background-color: ${colors.hover};
          color: ${colors.Gray[100]};
        }
      }
    }
  }
`;

export default Card;
