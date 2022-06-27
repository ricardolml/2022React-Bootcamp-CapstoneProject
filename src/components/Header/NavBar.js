import styled from 'styled-components';
import { colors } from '../../styles/_variables';

const NavBar = styled.nav`
  align-items: center;
  /* border-radius: 10px; */
  justify-content: space-between;
  display: flex;
  flex-flow: row wrap;
  padding: 15px;
  background-color: ${colors.Gray[200]};
  span {
    font-weight: bold;
    font-size: 25px;
    color: ${colors.Orange[600]};
    cursor: pointer;
  }

  i:hover {
    color: ${colors.hover};
    transition: 0.3s ease;
  }

  .content {
    align-items: center;
    display: flex;
    justify-content: end;
    gap: 20px;
    /* margin-left: auto; */
    /* padding-right: 20px; */
    width: 60%;
  }

  @media (max-width: 650px) {
    margin-left: 0;
    padding-top: 20px;
    padding-right: 8px;
    padding-left: 8px;

    .content {
      margin-top: 10px;
      gap: 20px;
      padding-bottom: 10px;
      width: 100%;
    }
  }
`;

export default NavBar;
