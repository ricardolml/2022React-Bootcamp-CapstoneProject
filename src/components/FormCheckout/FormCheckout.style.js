import styled from 'styled-components';
import { colors } from '../../styles/_variables';

const FormCheckoutStyle = styled.div`
  border: 1px solid ${colors.Gray[200]};
  border-radius: 10px;
  padding: 20px;
  /* width: 100%; */

  .form-control {
    display: flex;
    align-items: center;
    label {
      width: 20%;
      color: ${colors.primary};
      font-weight: bold;
    }
    input {
      margin-top: 10px;
    }
    textarea {
      border: 1px solid ${colors.Gray[200]};
      border-radius: 10px;
      padding: 10px;
      width: 98%;
      &:focus {
        outline: none;
        border: 1px solid #9ca3af;
        transition: 0.3s ease;
      }
    }
    margin-bottom: 15px;
    .error {
      font-size: 12px;
      color: ${colors.Red[500]};
    }
  }

  @media (max-width: 800px) {
    .form-control {
      flex-direction: column;
      label {
        width: 100%;
      }
    }
  }
`;
export default FormCheckoutStyle;
