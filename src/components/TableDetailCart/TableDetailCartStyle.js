import styled from 'styled-components';
import { colors } from '../../styles/_variables';

const TableDetailCartStyle = styled.div`
  .itemsTable {
    width: 60%;
  }
  .descriptionCart {
    width: 30%;
    padding: 30px;
    /* border: 1px solid; */
    min-height: 100%;
    background-color: ${colors.Orange[50]};
  }

  @media (max-width: 900px) {
    .itemsTable {
      width: 100%;
    }
  }
`;

export default TableDetailCartStyle;
