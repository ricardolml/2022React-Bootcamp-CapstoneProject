import styled from 'styled-components';
import { colors, max_widths } from '../../styles/_variables';

const PaginationStyle = styled.div`
  /* list-style: none; */
  margin-top: 40px;
  margin-bottom: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  color: ${colors.Gray[500]};
  span:hover {
    color: ${colors.primary};
    cursor: pointer;
    text-decoration: underline;
  }

  .page {
    display: flex;
    gap: 20px;
    align-items: center;
    select {
      font-size: 17px;
      border: 1px solid ${colors.Gray[300]};
      padding: 20px;
    }
  }

  li {
    display: inline;
    border: 1px solid ${colors.Gray[300]};
    padding: 15px 30px 15px 30px;

    &:hover {
      background-color: ${colors.Gray[200]};
    }
  }

  @media (max-width: ${max_widths.sm}) {
    li {
      display: inline;
      border: 1px solid ${colors.Gray[300]};
      padding: 5px 15px 5px 15px;

      &:hover {
        background-color: ${colors.Gray[200]};
      }
    }
  }
`;

export default PaginationStyle;
