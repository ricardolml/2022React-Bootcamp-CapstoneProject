import styled from "styled-components";
import { max_widths } from "../../styles/_variables";

const SliderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    max-height: 100px;
    overflow: hidden;
    position: relative;
    gap: 15px;
    img{
        width: 100%;
        /* height: auto; */
        max-height: 100px;
        border-radius: 5px;
        object-fit: cover;
    }

    label{
        position: absolute;
        font-weight: bold;
        left: 0%;
        bottom: 0px;
        font-size: 15px;
        backdrop-filter: blur(10px);
        padding-top: 5px;
        padding-bottom: 5px;
        width: 100%;
        text-align: center;
        cursor: pointer;
        border-radius: 5px;

    }

    .info:hover{
        img{
            opacity: .8;
            transition: .3s ease;
        }
    }

    .info{
        position: relative;
        width: 100%;
        cursor: pointer;
    }

    @-moz-document url-prefix() {
        label {
        background-color: rgba(255,255,255,0.5);
        bottom: 0px;
        text-decoration: underline;
        text-align: center;
        }
    }

    @media (max-width: ${ max_widths.sm }) {
        gap: 5px;
        label {
            font-size: 10px;
            display: block;
            padding: 0;
            bottom: 5px;

        };

        img{
            border-radius: 0px;
        }
    }

    

    

    


`;


export default SliderStyle;