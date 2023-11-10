import React, { Fragment } from "react";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center mt-5">Todo App</h1>

        <AddTodo />
        <ListTodo />
      </div>
    </Fragment>
  );
}

export default App;
