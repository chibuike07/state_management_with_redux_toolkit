import styled from "styled-components";

export const Container = styled.main`
  flex: 0.6;
  max-height: 90vh;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: green;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--primaryColor);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  @media only screen and (max-width: 700px) {
    flex: 1;
    max-height: 60vh;
  }

  .todo_card {
    display: flex;
    flex-direction: column;
    .card_text {
      min-height: 3em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0rem 1rem;
      box-shadow: inset 0px 0px 5px;
      color: var(--primaryColor);
      ::first-letter {
        text-transform: capitalize;
      }
      p {
        font-size: 1.5rem;
        border-radius: 2rem;
        outline: none;
      }
    }
    .actionBtn {
      align-self: flex-end;
      display: flex;
      gap: 1rem;
      margin-top: 0.5rem;
      small {
        width: 30px;
        font-size: 1.5rem;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-color: red;
        border-radius: 15px;
        color: var(--primaryColor);
      }

      small[title="edit"] {
        background-color: var(--secondaryColor);
      }
    }
  }
`;

// Design the landing page layout
// Add middleware to handle the user registration data
// Allow the user to have access to the profile after registration
// Add share buttons for the user
// Adjust the size of the sidebars menu items
