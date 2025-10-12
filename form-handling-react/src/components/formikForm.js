import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

const FormikForm = () => {
  const handleSubmit = (values) => {
    console.log('Formik form submitted:', values);
  };

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label>Username:</label>
          <Field name="username" />
          <ErrorMessage name="username" component="span" />
        </div>
        <div>
          <label>Email:</label>
          <Field name="email" />
          <ErrorMessage name="email" component="span" />
        </div>
        <div>
          <label>Password:</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="span" />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;