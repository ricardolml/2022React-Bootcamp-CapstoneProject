import styled from 'styled-components';
import { colors } from '../../styles/_variables';

const ProductListStyle = styled.div`
  .content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    place-content: center;
    margin-top: 20px;
  }

  .viewAll {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: ${colors.Gray[100]};
      color: ${colors.primary};
    }
  }
  /* .pagination {
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
  } */

  @media (max-width: 594px) {
    .content {
      grid-template-columns: repeat(1, 1fr);
      justify-content: center;
      align-items: center;
      align-content: center;
      padding-left: 20px;
      padding-right: 20px;
    }
    .viewAll {
      /* min-height: 200px; */
      /* padding: 20px; */
    }
  }

  @media (min-width: 500px) {
    .content {
      padding-left: 20px;
      padding-right: 20px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 900px) {
    .content {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media (min-width: 1500px) {
    .content {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;

export default ProductListStyle;
