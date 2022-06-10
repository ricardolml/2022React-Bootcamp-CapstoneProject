import styled from 'styled-components'
import { colors } from '../../styles/_variables';

const FooterStyle = styled.footer`
    align-items: center;
    bottom: 0;
    color: ${ colors.Gray[500] } ;
    display: flex;
    padding: 20px;
    justify-content: center;
    position: fixed;
    right: 0;
    text-align: center;
    width: 100%;
    /* height: 200px; */
    background-color:  ${ colors.Gray[200] };
`;

export default FooterStyle;