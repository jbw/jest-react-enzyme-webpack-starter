import React from 'react';
import LoginForm from '../../components/login-form';
import login from '../../services/auth';

class LoginFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasLoginError: undefined,
    };
  }

  handleSubmit = async (username, password) => login(username, password)
    .then((response) => {
      this.setState({ hasLoginError: false });
    }).catch((error) => {
      this.setState({ hasLoginError: true });
    });

  render() {
    return (
      <LoginForm
        key="login-form"
        onFormSubmit={this.handleSubmit}
        showError={this.state.hasLoginError}
      />
    );
  }
}


LoginFormContainer.propTypes = {

};

export default LoginFormContainer;
