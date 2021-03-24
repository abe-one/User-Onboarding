import React from "react";

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
      {/* Title, errors next to inputs, inputs */}
    </form>
  );
}
