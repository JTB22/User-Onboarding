import * as yup from "yup";

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required("First name is required")
        .min(2, "First name must be at least 2 characters"),
    last_name: yup
        .string()
        .trim()
        .required("Last name is required")
        .min(2, "Last name must be at least 2 characters"),
    email: yup
        .string()
        .email("Must be a valid email address")
        .required("Email is required"),
    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters"),
    terms: yup
        .boolean()
        .oneOf([true], "You must accept the terms of service")
});

export default formSchema;