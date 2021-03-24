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
  /////////RETURN FORM//////////
  return <>PLACEHOLDER</>;
}
