import styled from "styled-components";
import { colors } from "../../styles/_variables";

const NavBar = styled.nav`
    position: sticky;
    align-items: center;
    border-radius: 10px;
    border: 1px solid ${colors.Gray[300]} ;
    display: flex;
    flex-flow: row wrap;
    padding: 15px;
    span{
        font-weight: bold;
        font-size: 25px;
        color: ${ colors.Teal[700] };
    }

    i:hover{
        color: ${colors.Green[800]};
        transition: .3s ease;
    }

    div{
        align-items: center;
        display: flex;
        gap: 20px;
        margin-left: auto;
        padding-right: 20px;
        width: 60%;
    }

    
    @media (max-width: 650px ) {
        margin-left: 0;
        padding-top: 20px;
        padding-right: 8px;
        padding-left: 8px;
        
        div{
            gap: 10px;
            padding-bottom: 10px;
            width: 100%;
        }
    }
`;

export default NavBar;