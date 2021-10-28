import React from 'react';

import { Formik, getIn, Form, Field } from 'formik';
import * as Yup from 'yup';

// @ts-ignore
import logo from '../../logo.svg';

// @ts-ignore
import styles from './styles.module.scss';

const Login = (): any => {
  const schema = Yup.object({
    name: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
  });

  const ErrorMessage = ({ errors, fieldName }: any) => {
    const errorMessage = getIn(errors, fieldName);
    return <span className={styles.errMessage}>{errorMessage}</span>;
  };

  return (
    <div className={styles.loginWrapper}>
      <img src={logo} className='App-logo' alt='logo' style={{ width: 200, height: 200, marginBottom: 0 }} />
      <section>
        <Formik
          initialValues={{
            name: '',
            email: '',
          }}
          validationSchema={schema}
          onSubmit={(values: any) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors }: any) => (
            <Form className={styles.form}>
              <h5 className={styles.formTitle}>Login</h5>
              <div className={styles.inpWrapper}>
                <label htmlFor='name'>User name</label>
                {errors && <ErrorMessage fieldName='name' errors={errors} />}
                <Field name='name' />
              </div>
              <div className={styles.inpWrapper}>
                <label htmlFor='name'>User name</label>
                {errors && <ErrorMessage fieldName='email' errors={errors} />}
                <Field name='email' type='email' />
              </div>
              <button type='submit' className={styles.submitBtn}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </section>
    </div>
  );
};

export default Login;
