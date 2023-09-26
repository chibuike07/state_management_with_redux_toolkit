import styled from "styled-components";

export const Container = styled.div`
  flex: 0.4;
  min-width: 300px;
  @media only screen and (max-width: 700px) {
    flex: 1;
  }
  .ct_wrapper {
    header {
      margin-bottom: 2rem;
      color: var(--primaryColor);
      h2 {
        font-size: 1.2rem;
      }
    }

    .as_wp_form {
      display: flex;
      flex-direction: column;
      justify-content: baseline;
      .as_wp_fm_fields {
        width: 100%;
        margin-bottom: 0.5rem;
        input {
          width: 75%;
          height: 3em;
          padding: 0.5rem;
          border: none;
          outline: none;
          border-top-left-radius: 0.8rem;
          border-bottom-left-radius: 0.8rem;
        }
        button {
          height: 3em;
          padding: 0rem 0.2rem;
          background-color: var(--secondaryColor);
          border-color: var(--secondaryColor);
          outline: none;
          color: var(--primaryColor);
          cursor: pointer;
        }
      }
      small {
        color: var(--primaryColor);
        font-size: 1.1rem;
        padding-left: 1rem;
      }
    }
  }
`;
