import styled from "styled-components";
import { colors } from "./_variables";

const ContentProductList = styled.div`    
    /* padding-top: 50px; */
    /* overflow-y: scroll; */
    /* max-height: 80vh; */
    
    .slider{
        /* position: relative; */
        border-right: 2px solid ${colors.Gray[300]};
        /* position: fixed; */
        
        /* min-height: 100vh; */

    }
    .productList{
        /* padding-left: 20px; */
        /* min-height: 100vh; */
    }
`
export default ContentProductList;