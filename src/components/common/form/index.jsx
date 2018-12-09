import React from 'react';
import PropTypes from 'prop-types';
import style from '../../../style/form.css';

const Form = (props) => {
  const { onFormSubmit, children } = props;

  const handleFormSubmit = (event) => {
    onFormSubmit(event);

    event.preventDefault();
  };


  return (
    <form className={style.form} onSubmit={handleFormSubmit}>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.any,
  onFormSubmit: PropTypes.func,
};


export default Form;
