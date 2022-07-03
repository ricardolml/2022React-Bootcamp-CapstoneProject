import styled from 'styled-components';
import { colors } from '../../styles/_variables';

const Card = styled.div`
  border: 1px solid ${colors.Orange[300]};
  border-radius: 5px;
  box-shadow: 0px;
  box-shadow: 5px 5px 5px ${colors.Gray[300]};
  background-position: center center;
  width: 100%;
  height: 100%;
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

    .contentC {
      display: flex;
      justify-content: space-between;
      position: relative;
      margin-top: 10px;
      margin-bottom: 10px;
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
      margin-top: 20px;
      margin-bottom: 20px;
      button {
        width: 50px;
        height: 50px;
        border: 1px solid ${colors.Gray[100]};
        margin-left: auto;
        border-radius: 100%;
        background-color: ${colors.Gray[200]};
        /* color: ${colors.primary}; */
        &:hover:enabled {
          background-color: ${colors.hover};
          color: ${colors.Gray[100]};
        }
      }
    }
    .descriptionS {
      text-align: justify;
      margin-top: 10px;
      .text {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* number of lines to show */
        line-clamp: 3;
        -webkit-box-orient: vertical;
        color: ${colors.secondary};
      }
    }
  }

  .link {
    text-decoration: none;
    color: ${colors.primary};
  }
`;

export default Card;
