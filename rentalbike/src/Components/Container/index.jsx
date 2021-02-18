import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  /* padding-top: 35px; */
  margin: auto 0;
  border: 1px solid green;
  @media screen and (max-width: 500px) {
    margin: auto;
    height: 110vh;
    padding: 15px;
  }
`;

export default Container;