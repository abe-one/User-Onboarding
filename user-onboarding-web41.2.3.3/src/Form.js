import React from "react";
// import * as YUP from "yup";
// import schema from "./form-schema";

export default function Form(props) {
  /////////DESTRUCTURING//////////
  const { values, change, submit, disabled, errors } = props;
  /////////EVENT HELPERS//////////
  const onChange = (e) => {
    const { name, type, value, checked } = e.target;
    const relValue = type === "checkbox" ? checked : value;
    change(name, relValue);
  };

  const onSubmit = (e) => {
    e.target.preventDefault();
    submit();
  };
  /////////RETURN FORM//////////
  return (
    <form className="form-container" onSubmit={onSubmit}>
      <h2>Onboard New User</h2>
      <div className="form-group">
        <label>
          Name
          <input
            name="name"
            type="text"
            value={values.name}
            onChange={onChange}
            placeholder="Name"
          />
          <div className="error">{errors.name}</div>
        </label>

        <label>
          email
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            placeholder="jsmith@smiths.com"
          />
          <div className="error">{errors.email}</div>
        </label>
        <label>
          password
          <input
            name="password"
            type="password"
            value={values.password}
            onChange={onChange}
            placeholder="Minimum: 8 characters"
          />
          <div className="error">{errors.password}</div>
        </label>
        <label>
          I agree to submit rights to all my personal information in perpetuity
          across an unsecured connection.
          <input
            name="termsOfService"
            type="checkbox"
            checked={values.termsOfService}
            onChange={onChange}
            placeholder="John Smith"
          />
        </label>
        <button className="submit-button" disabled={disabled}>
          Submit
        </button>
      </div>
      {/* form-group */}
      {/* Title, errors next to inputs, inputs */}
    </form>
  );
}
