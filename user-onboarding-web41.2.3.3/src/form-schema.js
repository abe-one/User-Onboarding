import * as YUP from "yup";

export default YUP.object().shape({
  name: YUP.string()
    .required()
    .min(6, "Name must be at least 6 characters long"),
  email: YUP.string().email(),
  password: YUP.string().min(8, "Password is required"),
  termsOfService: YUP.boolean().oneOf([true], "You must agree"), //Error not rendering bug
});
