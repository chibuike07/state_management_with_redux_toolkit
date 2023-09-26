import React from "react";
import SearchLayout from "../Components/SearchLayout.component";
import Todo from "../Components/Todo.component/Todo";
import { Container } from "./mainStyles";

const Main = () => {
  return (
    <Container>
      <div className="wrapper">
        <SearchLayout />
        <Todo />
      </div>
    </Container>
  );
};

export default Main;
