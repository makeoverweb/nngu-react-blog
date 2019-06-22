import React from 'react';
import './style.css';
import Logo from '../Logo';
import Register from "../Register";
import Login from "../Login";
import { Switch, Route, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import actions from '../../actions/user';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let isHiddenForm = this.props.isLoggedIn ? {display: 'none'} : {display: 'inline-block'};
    let isVisibleForm = this.props.isLoggedIn ? {display: 'inline-block'} : {display: 'none'};
    return (
      <div className="header">
      <div className="header__wrap">
        <Logo/>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register}/>
        </Switch>
        <div className="header__reg-wrap">
          <span
            className="header__form-clear" style={isHiddenForm}
            onClick={() => {this.props.actions.clearForm()}}
          >
            <Link to={'/login'} className="header__login-link" >Войти</Link>
          </span>
          <span
            className="header__form-clear" style={isHiddenForm}
            onClick={() => {this.props.actions.clearForm()}}
          >
            <Link to={'/register'} className="header__register-link" >Зарегистрироваться</Link>
          </span>
        </div>
        <h3 className="signIn__title" style={isVisibleForm}>Привет {this.props.userLogin} !</h3>
        <button
          className="signIn__button" style={isVisibleForm}
          onClick={() => {this.props.actions.outLogin(this.props.userLogin, this.props.userPassword)}}
        >
          Выйти
        </button>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.user
});

const mapDispatchToProps = dispatch => ({
  actions:bindActionCreators(actions, dispatch)
});

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(Header);

export default Wrapped;