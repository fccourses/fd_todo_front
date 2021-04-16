import { Formik, Form, Field } from 'formik';

const TaskForm = props => {
  const { submitHandler } = props;
  const onSubmit = (values, formikBag) => {
    submitHandler(values);
    formikBag.resetForm();
  };
  const values = {
    body: '',
    deadline: '',
    isDone: false,
  };

  return (
    <Formik initialValues={values} onSubmit={onSubmit}>
      <Form>
        <Field name='body' />
        <Field name='deadline' type='date' />
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

export default TaskForm;
