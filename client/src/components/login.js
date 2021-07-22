import React from 'react';
import { Formik, Field, Form } from 'formik';
import { ButtonSubmitLogin } from '../elements/button'

export const Login = () => (
  <div>
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="username">Username</label>
        <Field id="username" name="username" placeholder="" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder=""
          type="email"
        />

        <label htmlFor="password">Password</label>
        <Field
          id="password"
          name="password"
          placeholder=""
          type="password"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);