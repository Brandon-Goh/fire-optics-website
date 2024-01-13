import styled from "styled-components";

export const Wrapper = styled.div`
  .title {
    height: 1vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    h1 {
      padding-top: 12vh;
      color: white;
      font-weight: 500;
      letter-spacing: 0.8px;
      font-size: 2rem;
    }
  }
`;

export const Content = styled.div`
  background-image: url("${process.env.PUBLIC_URL}/images/background.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: black;
  height: 85vh;
`;
