import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Name is required"),
  email: Yup.string()
    .trim()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required")
});
