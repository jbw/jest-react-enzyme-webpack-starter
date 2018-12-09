import React from 'react';
import style from '../../../style/form.css';
import PropTypes from 'prop-types';

class Input extends React.Component {

    handleInputChange = (event) => {
        this.props.onInputChange(event);
    };

    getInputElementByType = type => {
        if (type === 'username') {
            return <input
                id='username'
                className={`${style.input} ${style.marginBottom} ${style.widthFull}`}
                type='username'
                autoComplete='username'
                onChange={this.handleInputChange}
                value={this.props.value}
            />
        } else if (type === 'password') {
            return <input
                id='password'
                className={`${style.input} ${style.marginBottom} ${style.widthFull}`}
                type='password'
                autoComplete='current-password'
                onChange={this.handleInputChange}
                value={this.props.value}
            />
        }

        return <input className={`${style.input} ${style.marginBottom} ${style.widthFull}`} onChange={this.handleInputChange} value={this.props.value}
        />
    }

    render() {
        return this.getInputElementByType(this.props.type);
    }
}

Input.propTypes = {
    type: PropTypes.string,
    value: PropTypes.any,
    onInputChange: PropTypes.func
}

export default Input;
