import styled from "styled-components";
import { colors, max_widths } from "../../styles/_variables";


const ProductListStyle =  styled.div`
    .content{
        display: flex;
        flex-flow: row wrap;
        gap: 1rem; 
        justify-content:space-evenly;
    }

    .viewAll{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center; 
        justify-content : center;
        width: 200px;

        &:hover{
            background-color: ${colors.Gray[400]};
            color: ${colors.Gray[200]};
        }
    }

    @media (max-width: ${ max_widths.sm }) {
        .viewAll{
           min-height: 200px;
        }
    }
`;

export default ProductListStyle;