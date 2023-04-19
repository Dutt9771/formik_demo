import * as Yup from 'yup';

export const Registrationschema= Yup.object({
    name:Yup.string().min(2).max(25).required('Name is required'),
    email:Yup.string().email().required('Email is required'),
    password:Yup.string().min(6).required('Password is required'),
    confirmpassword:Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
})