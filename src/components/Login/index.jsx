import React from 'react';
import './style.css';
import { bindActionCreators } from 'redux';
import actions from '../../actions/user';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let isHiddenForm = this.props.isLoggedIn ? {display: 'none'} : {display: 'inline-block'};

    let isHiddenError = this.props.correctName ? {display: 'none'} : {display: 'block'};

    return (
      <div className="signIn">
        <div className="signIn__login-wrap" style={isHiddenForm}>
          <label htmlFor="signIn__login" className="signIn__login-label" >Login</label>
          <input
            id="signIn__login"
            className="signIn__login"
            type="text"
            placeholder="Ваш логин"
            onChange={(e) => this.props.actions.inputLoginChange(e.target.value)}
          />
        </div>
        <div className="signIn__password-wrap" style={isHiddenForm}>
          <label htmlFor="signIn__password" className="signIn__password-label" >Password</label>
          <input
            id="signIn__password"
            className="signIn__password"
            type="password"
            placeholder="Ваш пароль"
            onChange={(e) => this.props.actions.inputPasswordChange(e.target.value)}
          />
        </div>
        <span className="signIn__inputError" style={isHiddenError}>Некорректные данные</span>
        <input type="submit" className="signIn__button"
               onClick={() => {this.props.actions.onLogin(this.props.getUsersReg, this.props.userLogin, this.props.userPassword)}}
               style={isHiddenForm}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.user
});

const mapDispatchToProps = dispatch => ({
  actions:bindActionCreators(actions, dispatch)
});

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(Login);

export default Wrapped;