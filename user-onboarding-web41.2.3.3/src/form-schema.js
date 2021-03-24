import * as YUP from "yup";

export default YUP.object().shape({
  name: YUP.string()
    .required()
    .min(6, "Name must be at least 6 characters long"),
  email: YUP.string().email().required,
  password: YUP.string().required(),
  termsOfService: YUP.boolean().oneOf([true], "You must agree"),
});
