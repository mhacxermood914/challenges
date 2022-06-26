/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
import * as Yup from 'yup';
import { ILogin, IRegister } from 'interfaces';

export const loginValidationSchema: Yup.SchemaOf<ILogin> = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Required'),
  password: Yup.string().required('Required'),
});

export const signupValidationSchema: Yup.SchemaOf<IRegister> = Yup.object().shape({
  firstname: Yup.string().required('Required'),
  lastname: Yup.string().required('Required'),
  email: Yup.string().email('Invalid Email').required('Required'),
  password: Yup.string().required('Required'),
  confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
  role: Yup.string().required('Required'),
  lang: Yup.string().required('Required'),
});
