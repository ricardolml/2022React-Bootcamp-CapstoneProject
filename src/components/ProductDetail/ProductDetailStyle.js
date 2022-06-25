import styled from 'styled-components';
import { colors } from '../../styles/_variables';
// import { colors, max_widths } from '../../styles/_variables';

const ProductDetailStyle = styled.div`
  border: 1px solid ${colors.Gray[200]};
  padding: 15px;
  color: ${colors.Gray[500]};
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

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75vw;
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
        align-items: center;
        gap: 20px;
      }
    }
  }

  .sectionDescription {
    color: ${colors.Gray[500]};
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
  .sliderImg {
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }

    .swiper-slide img {
      cursor: pointer;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .swiper {
      width: 40%;
      height: 40%;
      margin-left: auto;
      margin-right: auto;
    }

    .swiper-slide {
      background-size: cover;
      background-position: center;
    }

    .mySwiper2 {
      height: 40%;
      width: 100%;
    }

    .mySwiper {
      height: 20%;
      box-sizing: border-box;
      padding: 10px 0;
    }

    .mySwiper .swiper-slide {
      width: 10%;
      height: 100%;
      opacity: 0.4;
    }

    .mySwiper .swiper-slide-thumb-active {
      opacity: 1;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
