import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--bgColor);
  height: 100vh;
  .wrapper {
    min-width: 300px;
    width: 90%;
    padding: 1rem 0rem;
    gap: 2rem;
    display: flex;
    flex-wrap: wrap;
  }
`;
