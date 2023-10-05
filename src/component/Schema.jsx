import * as Yup from "yup";
export const validateSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(20).required(),
  confromPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password Do not Matched")
    .required(),
});
