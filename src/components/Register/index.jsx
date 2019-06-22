import React from 'react';
import './style.css';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import actions from '../../actions/user';
import { connect } from 'react-redux';

class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let isHiddenForm = this.props.isRegIn ? {display: 'none'} : {display: 'inline-block'};
    let isVisibleForm = this.props.isRegIn ? {display: 'inline-block'} : {display: 'none'};
    let isExistUser = this.props.existUser ? {display: 'inline-block'} : {display: 'none'};
    // let nameErrorStyle = this.props.correctName ? {display: 'none'} : {display: 'block'};
    // let passwordErrorStyle = this.props.correctPassword ? {display: 'none'} : {display: 'block'};
    // let mailErrorStyle = this.props.correctMail ? {display: 'none'} : {display: 'block'};
    let isAllError = this.props.correctName || this.props.correctPassword || this.props.correctMail ? {display: 'none'} : {display: 'block'};


    return (
      <div className="signUp">
        <div className="signUp__login-wrap" style={isHiddenForm}>
          <label htmlFor="signUp__login" className="signUp__login-label" >Login</label>
          <input
            id="signUp__login"
            className="signUp__login"
            type="text"
            placeholder="Введите имя"
            onChange={(e) => this.props.actions.inputLoginReg(e.target.value)}
          />
        </div>
        {/*<span className="signIn__inputError" style={nameErrorStyle}>Некорректное имя</span>*/}
        <div className="signUp__password-wrap" style={isHiddenForm}>
          <label htmlFor="signUp__password" className="signUp__password-label" >Password</label>
          <input
            id="signUp__password"
            className="signUp__password"
            type="password"
            placeholder="Введите пароль"
            onChange={(e) => this.props.actions.inputPasswordReg(e.target.value)}
          />
        </div>
        {/*<span className="signIn__inputError" style={passwordErrorStyle}>Некорректный пароль</span>*/}
        <div className="signUp__email-wrap" style={isHiddenForm}>
          <label htmlFor="signUp__email" className="signUp__email-label" >Email</label>
          <input
            id="signUp__email"
            className="signUp__email"
            type="email"
            placeholder="Введите почту"
            onChange={(e) => this.props.actions.inputEmailReg(e.target.value)}
            />
        </div>
        {/*<span className="signIn__inputError" style={mailErrorStyle}>Некорректный мэйл</span>*/}
        <input type="submit" className="signUp__button"
               onClick={() => {this.props.actions.regIn(this.props.getUsersReg, this.props.userLogin, this.props.userPassword, this.props.userEmail)}}
               style={isHiddenForm}
        />
        <span className="signIn__inputError" style={isAllError}>Некорректные данные !</span>
        <span className="signIn__inputError" style={isExistUser}>Пользователь существует !</span>
        <div className="signUp__title" style={isVisibleForm}>Вы успешно зарегистрированы !</div>
        <button
          className="signUp__back signUp__button" style={isVisibleForm}
          onClick={() => {this.props.actions.regOut()}}
        >
          <Link to={'/'}>Назад</Link>
        </button>
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

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(Register);

export default Wrapped;