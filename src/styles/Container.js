import styled from 'styled-components';
import '../index.css'

export const Container = styled.div`
    padding: 50px;
    margin-top: 50px;
    margin-bottom: 50px;
    @media (max-width: 800px ) {
        padding: 0;
        margin-top: 120px;
    }
    /* overflow-y: scroll; */
    /* padding-bottom: 100px; */
    /* max-height: 82vh; */
    /* margin-top: 15px; */
`;

export default Container;