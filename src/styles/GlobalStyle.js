import { createGlobalStyle } from 'styled-components';
import '../index.css';
import { colors } from './_variables';
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${colors.Gray[50]} ;

    margin: 0;
    padding: 0;
  }

  hr{
    border: 1px solid ${colors.Orange[200]};
  }
  button{
    cursor: pointer;
  }
`;

export default GlobalStyle;
