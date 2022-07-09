import styled from 'styled-components';

export const CheckoutContend = styled.div`
  .content {
    display: flex;
    gap: 20px;
    flex-flow: row wrap;
    .form {
      width: 60%;
    }
    .cardSummary {
      width: 35%;
      background-color: #fff7ed;
      padding: 10px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    @media (max-width: 900px) {
      .form {
        width: 100%;
      }
      .cardSummary {
        width: 100%;
      }
    }
  }
`;

export default CheckoutContend;
