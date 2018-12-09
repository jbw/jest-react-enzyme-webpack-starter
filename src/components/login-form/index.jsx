import React from 'react';
import Button from '../common/button';
import style from '../../style/form.css';
import Error from '../common/error';
import Form from '../common/form';
import Input from '../common/input';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    handleFormSubmit = (event) => {
        this.props.onFormSubmit(this.state.username, this.state.password);

        event.preventDefault();
    };

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    };

    handleUserNameChange = (event) => {
        this.setState({ username: event.target.value });
    };

    render() {
        return (
            <div className={`${style.formWrapper} ${style.justify} ${style.center}`}>
                <div className={`${style.widthFull} ${style.maxWidth}`}>
                    <Form onFormSubmit={this.handleFormSubmit}>
                        <div className={style.marginBottom}>
                            <label htmlFor='username' className={`${style.block} ${style.textDarker} ${style.marginBottomSmall}`}>
                                Username
                            </label>

                            <Input type='username' onInputChange={this.handleUserNameChange} value={this.state.username} />
                        </div>

                        <div className={style.marginBottomBig}>
                            <label htmlFor='password' className={`${style.block} ${style.textDarker} ${style.marginBottomSmall}`}>
                                Password
                            </label>

                            <Input type='password' onInputChange={this.handlePasswordChange} value={this.state.password} />

                            {this.props.showError && <Error />}
                        </div>

                        <div className={`${style.justifyBetween} ${style.center}`}>
                            <Button label='Sign In' />
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

LoginForm.propTypes = {
    showError: PropTypes.bool,
    onFormSubmit: PropTypes.func
}

export default LoginForm;
