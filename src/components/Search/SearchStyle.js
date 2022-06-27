import styled from 'styled-components';
import { colors } from '../../styles/_variables';

const SearchStyle = styled.div`
  .content2 {
    position: absolute;
    background-color: white;
    width: 100%;
    border-radius: 10px;
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
      padding-bottom: 5px;
      border-bottom: 1px solid ${colors.Gray[200]};
    }

    .viewAll {
      border: none;
      margin-top: 15px;
      color: ${colors.primary};
      cursor: pointer;
      &:hover {
        text-decoration: underline;
        color: ${colors.hover};
      }
    }
  }
`;

export default SearchStyle;
