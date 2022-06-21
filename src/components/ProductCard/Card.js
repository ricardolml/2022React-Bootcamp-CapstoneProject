import styled from "styled-components";
import { colors } from "../../styles/_variables";

const Card = styled.div`
  border: 1px solid ${colors.Gray[300]};
  border-radius: 5px;
  box-shadow: 0px;
  box-shadow: 5px 5px 5px ${colors.Gray[200]};
  position: relative;
  min-width: 18rem;
  max-width: 18rem;
  max-height: 480px;
  min-height: 480px;
  /* cursor: pointer; */
  .img {
    display: flex;
    border-radius: 5px;
    position: relative;
    width: 100%;
    justify-content: center;
  }
  img {
    width: 100%;
    object-fit: cover;
    max-height: 280px;
    border-radius: 5px;
  }

  .body {
    padding-left: 10px;
    padding-right: 10px;
    h5 {
      color: ${colors.Gray[500]};
      height: 10px;
    }
    

    .content {
      display: flex;
      gap: 5px;
      flex-direction: column;
      bottom: 15px;
      
      .information {
        display: flex;
        justify-content: space-between;
        position: relative;
      }
    }

    button{
      width: 50px;
      height: 50px;
      border: 1px solid ${colors.Gray[100]};
      margin-left: auto;
      border-radius: 100%; 
      &:hover{
        background-color: ${colors.Gray[200]};
      }
    }
  }
`;

export default Card;
