import styled from "styled-components";
import { colors } from "./_variables";

const ContentProductList = styled.div`    
    display: flex;
    .slider{
        border-right: 2px solid ${colors.Gray[300]};
        .categories{
            position: fixed;
            /* padding-top: 15px; */
            ul{
                padding-left: 10px;
                list-style: none;
                img{
                    display: none;
                }
                li{
                    label{
                        cursor: pointer;
                        font-size: 14px;
                        padding-left: 10px;
                    }
                    border-radius: 5px;
                    margin-bottom: 5px;
                    padding: 5px;
                    margin: px;
                    
                    
                }
            }      
        }
    }
    .active{
        background-color: ${colors.Gray[200]};
    }
    .productList{
    }
`
export default ContentProductList;