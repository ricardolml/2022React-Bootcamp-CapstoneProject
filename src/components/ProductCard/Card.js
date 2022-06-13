import styled from "styled-components";
import { colors, max_widths } from "../../styles/_variables";


const Card =  styled.div`
    border: 1px solid ${colors.Gray[300]} ;
    border-radius: 5px;
    box-shadow: 0px;
    box-shadow: 5px 5px 5px ${colors.Gray[200]};
    position: relative;
    max-width: 200px;
    cursor: pointer;
    img{
        border-radius: 5px;
        position: relative;
        display: flex;
        width: 100%;
        object-fit: cover;
    }

    .body{
        padding-left: 10px;
        padding-right: 10px;

        h5{
            color: ${ colors.Gray[500] };
            height: 25px;
        }
        .category{
            color: ${ colors.Gray[400] };
        }
        
        .content{
            display: flex;
            justify-content: space-between;
            position: relative;
            bottom: 15px;
        }
    }
`;

export default Card;