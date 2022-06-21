import styled from 'styled-components';
import { colors } from './_variables';

const ContentProductList = styled.div`
  display: flex;
  gap: 20px;
  .slider {
    border-right: 2px solid ${colors.Gray[300]};
    min-width: 20%;
    .categories {
      position: fixed;
      ul {
        padding-left: 10px;
        list-style: none;
        img {
          display: none;
        }
        li {
          label {
            display: flex;
            cursor: pointer;
            font-size: 14px;
            /* padding-left: 10px; */
          }
          border-radius: 5px;
          margin-bottom: 5px;
          padding: 5px;
          cursor: pointer;
          /* margin: px; */
        }

        li:hover {
          background-color: ${colors.Gray[200]};
        }
      }
    }
  }
  .active {
    background-color: ${colors.Gray[200]};
    font-weight: bold;
  }
  .productList {
  }

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 5px;
    .slider {
      margin-top: 20px;
      width: 100%;
      border-right: 0px;
      .categories {
        position: relative;
        ul {
          border-radius: 5px;
          display: flex;
          justify-content: space-around;
          gap: 5px;
          padding: 10px;
          background-color: ${colors.Gray[200]};

          label {
            /* padding: 3px; */
            width: 100%;
          }
        }
      }
    }

    .productList {
      overflow-y: scroll;
      padding-bottom: 100px;
      max-height: 60vh;
      .loading {
        width: 95vw;
      }
      margin-top: 30px;
    }
    .active {
      background-color: none;
    }
  }

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75vw;
  }
`;
export default ContentProductList;
