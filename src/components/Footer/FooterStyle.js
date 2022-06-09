import styled from 'styled-components'
import { colors, max_widths } from '../../styles/_variables';

const FooterStyle = styled.footer`
    align-items: center;
    bottom: 0;
    color: ${ colors.Gray[500] } ;
    display: flex;
    max-height: 200px;
    padding: 20px;
    justify-content: center;
    position: fixed;
    text-align: center;
    width: 100%;
    background-color:  ${ colors.Gray[200] };
`;

export default FooterStyle;