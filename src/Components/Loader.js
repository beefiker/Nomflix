import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin-top: 20px;
`;

const Loader = () => {
  return (
    <Container>
      <span role="img" aria-label="Loading">
        ⏰
      </span>
    </Container>
  );
};

export default Loader;
