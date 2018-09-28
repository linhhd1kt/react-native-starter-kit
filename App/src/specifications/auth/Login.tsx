import React from 'react';
import { login } from './actions';
import { connect } from 'react-redux';
import MLoadingContainer from '../../components/container/MLoadingContainer';
import MButton from '../../components/button/MButton';
import MLabel from '../../components/label/MLabel';

interface IProps {
  isLoggedIn: boolean;
  isLoading: boolean;
}

interface IStates {}

class Login extends React.PureComponent<IProps, IStates> {
  render() {
    return (
      <MLoadingContainer
        isLoading={this.props.isLoading}
        style={{
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <MButton>
          <MLabel>Login</MLabel>
        </MButton>
      </MLoadingContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    isLoading: state.auth.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email: string, password: string) => dispatch(login(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
