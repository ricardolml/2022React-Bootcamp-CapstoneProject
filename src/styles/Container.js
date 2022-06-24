import styled from 'styled-components';
import '../index.css';

export const Container = styled.div`
  padding: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    padding: 20px;
    margin-top: 120px;
  }
`;

export default Container;
