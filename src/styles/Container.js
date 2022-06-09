import styled from 'styled-components';
import '../index.css'
import { max_widths } from './_variables';

export const Container = styled.div `

    overflow-y: scroll;
    padding-bottom: 70px;
    max-height: 85vh;
    @media (max-width: ${ max_widths.sm }) {
        padding-top  : 10px ; 
        /* padding-bottom : 10px;  */
    }

`;

export default Container;