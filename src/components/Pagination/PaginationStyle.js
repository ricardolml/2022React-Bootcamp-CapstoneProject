import styled from "styled-components";
import { colors, max_widths } from "../../styles/_variables";


const PaginationStyle =  styled.ul`
    list-style: none;
    margin-top: 40px;
    margin-bottom: 40px;
    li {
        display: inline;
        border: 1px solid ${colors.Gray[300]};
        padding: 15px 30px 15px 30px;
        

        &:hover{
            background-color: ${colors.Gray[200]};
        }
    }

    @media (max-width: ${ max_widths.sm }) {
        li {
            display: inline;
            border: 1px solid ${colors.Gray[300]};
            padding: 5px 15px 5px 15px;
            

            &:hover{
                background-color: ${colors.Gray[200]};
            }
        }
    }
`

export default PaginationStyle;