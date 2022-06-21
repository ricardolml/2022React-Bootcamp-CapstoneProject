import styled from "styled-components";
import { colors } from "../../styles/_variables";


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
    .pagination{
        display: flex;
        justify-content: flex-end;
        margin-right: 20px;
    }

    @media (max-width: 594px) {
        .viewAll{
           min-height: 200px;
           /* padding: 20px; */
        }
    }
`;

export default ProductListStyle;