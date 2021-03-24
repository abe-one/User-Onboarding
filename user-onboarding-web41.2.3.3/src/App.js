import "./App.css";
import React, { useState, useEffect } from "react";
import * as YUP from "yup";
import Form from "./Form";

/////////INITIAL VALUES//////////
const initialFormValues = { name: "", email: "", password: "", termOfServ: "" };
const initialErrorValues = {
  name: "",
  email: "",
  password: "",
  termofserv: "",
};

//////////MAIN FUNCTION//////////
function App() {
  //////////STATES//////////
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errorValues, setErrorValues] = useState(initialErrorValues);
  const [users, setUsers] = useState([]);
  const [disabled, setDisabled] = useState(true);

  //////////HELPERS//////////
  const getUsers = () => {};

  const postNewUser = () => {};

  const inputChange = () => {};

  const submitForm = () => {};

  //////////EFFECTS//////////
  useEffect(() => getUsers(), []); //Initialize with whatever's on the database

  useEffect(() => {}, []); //Enable button if schema met

  //////////RETURN APP//////////
  return (
    <div>
      <header>
        <h1>Onboard Users</h1>
      </header>
      <Form
        values={formValues}
        change={inputChange}
        submit={submitForm}
        disabled={disabled}
        errors={errorValues}
      />
      <div>
        <h3>Current User List</h3>
      </div>
    </div>
  );
}

export default App;
