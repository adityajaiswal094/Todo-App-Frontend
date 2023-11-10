import React, { Fragment, useState } from "react";

export default function AddTodo() {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      // eslint-disable-next-line no-unused-vars
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <form
        className="d-flex justify-content-center mt-5"
        onSubmit={onSubmitForm}
      >
        <input
          type="text form-control"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
}
