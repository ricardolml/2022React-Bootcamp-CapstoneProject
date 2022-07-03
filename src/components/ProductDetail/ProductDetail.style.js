import styled from 'styled-components';
import { colors } from '../../styles/_variables';
// import { colors, max_widths } from '../../styles/_variables';

const ProductDetailStyle = styled.div`
  border: 1px solid ${colors.Gray[200]};
  padding: 15px;
  color: ${colors.secondary};
  .content {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
  }
  .description {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .header {
    h2 {
      /* height: 15px; */
      color: black;
    }
    div {
      /* margin-top: 30px; */
    }
  }
  .sectionReview {
    display: flex;
    align-items: center;
    gap: 20px;

    .starts {
      color: ${colors.Orange[600]};
    }

    .numReview {
      text-decoration: underline;
    }
  }
  .sectionPrice {
    display: flex;
    /* margin-top: 20px; */
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
  }

  .sectionDescription {
    color: ${colors.secondary};
    text-align: justify;
  }
  .sectionDetails {
  }

  .addCart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .totalPrice {
      display: flex;
      flex-direction: column;
      gap: 5px;
      span {
        font-size: 20px;
      }
    }
    button {
      /* margin-left: auto; */
      border-radius: 20px;
      width: 30%;
      /* height: 100%; */
    }
  }

  /* justify-content: center; */

  .slider {
    width: 30%;
  }

  @media (max-width: 740px) {
    .content {
      flex-direction: column;
      .description {
        width: 100%;
      }
      .slider {
        width: 100%;
      }
    }
  }
`;

export default ProductDetailStyle;
