import React from 'react';
import { useFormik } from 'formik';

export const Form = () => {
  const formik = useFormik(
    initialValues: {
      email: '',
      password: '',
      passwordCheck: '',
      phoneNumber: '',
    }
  );
  return (
    <div>
      <form>
        <input
          type="email"
          id="email"
          name="email"
        />
      </form>
    </div>
  );
};

// password: Yup.string().required('Required'),
//     password_confirmation: Yup.string().oneOf([Yup.ref('password'), null], "Does not match with field1!")
//     .required('Required')
