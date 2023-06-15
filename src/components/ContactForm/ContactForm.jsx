import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operation';
import { selectContacts } from 'redux/selectors';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleFormSubmit = (values, { resetForm }) => {
    const loweredName = values.name.toLowerCase();

    contacts.find(contact => contact.name.toLowerCase() === loweredName)
      ? alert(`${values.name} is already in contacts`)
      : dispatch(addContact(values)) && resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      onSubmit={handleFormSubmit}
    >
      <Form className={css.form}>
        <label className={css.formLabel}>
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter name"
            className={css.formName}
          />
          <ErrorMessage name="name" component="div" />
        </label>
        <label className={css.formLabel}>
          Number
          <Field
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter phone number"
            className={css.formName}
          />
        </label>
        <ErrorMessage name="number" component="div" />
        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
