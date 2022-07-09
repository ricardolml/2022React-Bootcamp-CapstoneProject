import styled from 'styled-components';
import { colors } from '../../styles/_variables';

const TableDetailCartStyle = styled.div`
  .itemsTable {
    width: 60%;
    overflow-y: scroll;
    height: 70vh;
    .itemPrice {
      display: flex;
      gap: 30px;
      flex-wrap: wrap;
      justify-content: space-between;
      text-align: center;
      border-bottom: 1px solid orange;
      padding-bottom: 10px;
    }
    .deteleItem {
      color: ${colors.Orange[500]};
      i {
        cursor: pointer;
        &:hover {
          color: ${colors.primary};
        }
      }
    }
  }
  .empty {
    padding: 30px;
    color: ${colors.Red[300]};
  }
  .descriptionCart {
    width: 38%;
    /* max-height: 550px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${colors.Orange[50]};
    div {
      padding-left: 30px;
      padding-right: 30px;
    }
    .detailPrice {
      div {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
      }
    }
    label {
      font-weight: bold;
    }
    .total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: ${colors.Orange[100]};
      height: 50px;
    }
  }

  @media (max-width: 900px) {
    .itemsTable {
      width: 100%;
    }
    .descriptionCart {
      width: 100%;
    }
  }
  @media (max-width: 400px) {
    .itemsTable {
      .itemPrice {
        font-size: 12px;
        justify-content: center;
        padding-bottom: 50px;
      }
    }
  }
`;

export default TableDetailCartStyle;
