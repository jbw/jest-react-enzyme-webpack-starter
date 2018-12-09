import React from 'react';
import PropTypes from 'prop-types';

import style from '../../../style/button.css';


const Button = (props) => {
  const { label, type } = props;

  return (
    <input
      type="submit"
      value={label}
      className={
        type === 'secondary'
          ? style.secondaryButton
          : style.primaryButton
      }
    />
  );
};

Button.defaultProps = {
  label: '',
  type: 'primary',
};

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
