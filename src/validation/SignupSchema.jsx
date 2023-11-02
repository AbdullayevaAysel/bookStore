import * as Yup from "yup"

export const SignupSchema = Yup.object().shape({
    username: Yup.string().required('Required').min(2, "Your username needs to be at least 2 characters."),
    password: Yup.string().required('Enter your password to sign in'),
})