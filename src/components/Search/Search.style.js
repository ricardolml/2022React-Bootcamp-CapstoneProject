import styled from 'styled-components';
import { colors } from '../../styles/_variables';

const SearchStyle = styled.div`
  .content2 {
    position: absolute;
    background-color: white;
    width: 100%;
    border-radius: 10px;
  }

  .input {
    .search {
      position: absolute;
      top: 10px;
      right: 10px;
      color: ${colors.secondary};
    }
  }

  .link {
    text-decoration: none;
    color: ${colors.secondary};
  }
  ul {
    padding-right: 20px;
    li {
      display: flex;
      align-items: center;
      gap: 20px;
      padding-top: 5px;
      padding-bottom: 5px;
      border-bottom: 1px solid ${colors.Gray[200]};
      .price {
        font-size: 13px;
      }
    }

    .viewAll {
      text-decoration: none;
      li {
        margin-top: 20px;
        border: none;
        color: ${colors.primary};
        cursor: pointer;
        &:hover {
          text-decoration: underline;
          color: ${colors.hover};
        }
      }
    }
  }
`;

export default SearchStyle;
