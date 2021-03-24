import "./App.css";
import React, { useState, useEffect } from "react";
import * as YUP from "yup";
import schema from "./form-schema";
import Form from "./Form";
import axios from "axios";

/////////INITIAL VALUES//////////
const initialFormValues = {
  name: "hdiuh",
  email: "",
  password: "",
  termsOfService: "",
};
const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  termsOfService: false,
};

//////////MAIN FUNCTION//////////
function App() {
  //////////STATES//////////
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);
  const [disabled, setDisabled] = useState(true);

  //////////HELPERS//////////
  const getUsers = () => {};

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => setUsers([...users, res.data]))
      .catch((err) => {
        console.log(err);
      })
      .finally(setFormValues(initialFormValues));
  };

  // postNewUser(initialFormValues);

  //////////EVENT HANDLERS//////////
  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
    YUP.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const submitForm = () => {};

  //////////EFFECTS//////////
  useEffect(() => {}); //Initialize with whatever's on the database

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]); //Enable button if schema met

  //////////RETURN APP//////////
  return (
    <div>
      <header>
        <h1>User Onboarding</h1>
      </header>
      <Form
        values={formValues}
        change={inputChange}
        submit={submitForm}
        disabled={disabled}
        errors={formErrors}
      />
      <div>
        <h3>Current User List</h3>
      </div>
    </div>
  );
}

export default App;
