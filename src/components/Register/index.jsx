import React from 'react';
import './style.css';
import fixtures from '../../fixtures';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userPassword: '',
      userLogin: '',
      isLoggedIn: false,
      regUsers: fixtures
    };
  }

  onLoginChange = (e) => {
    this.setState({
      userLogin: e.target.value,
    });
  };

  onPasswordChange = (e) => {
    this.setState({
      userPassword: e.target.value,
    });
  };

  onLogin = () => {
    if (fixtures.map(obj => obj.name === this.state.userLogin).includes(true) &&
        fixtures.map(obj => obj.password === this.state.userPassword).includes(true)) {
        this.props.transformRight();
        this.setState({
        isLoggedIn: true
      })
    }
  };

  render() {
    return (
      <div className="register">
        <input
          type="text"
          placeholder="Ваш логин"
          onChange={(e) => this.onLoginChange(e)}
        />
        <input
          type="text"
          placeholder="Ваш пароль"
          onChange={(e) => this.onPasswordChange(e)}
        />
        <button
          onClick={() => this.onLogin()}
        >Войти</button>
        {
          this.state.isLoggedIn
          ?
            <h3>Вы успешно вошли на сайт!</h3>
            :
            <div>войдите в систему</div>
        }
      </div>
    );
  }
}
