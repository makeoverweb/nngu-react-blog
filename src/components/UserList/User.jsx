import React from 'react';
import { Link, Route } from 'react-router-dom';
import mail from '../../assets/img/mail.png';
import tel from '../../assets/img/phone.png';
import userAvatar from '../../assets/img/user.png';
import { bindActionCreators } from 'redux';
import actions from '../../actions/user';
import { connect } from 'react-redux';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const userId = +this.props.match.params.id;
    const selectedUser = this.props.getUsers.find(user => user.id === userId);
    return (
      <div className="user">
        <img src={userAvatar} className="user__avatar"/>
        <p className="user__name">{selectedUser.name}</p>
        <div className="user__about">
          <div className="user__contacts">Контакты:
            <span className="user__mail">
              <img src={mail} className="user__mail-img"/>
              {selectedUser.email}
            </span>
            <span className="user__phone">
              <img src={tel} className="user__phone-img"/>
              {selectedUser.phone}
            </span>
          </div>
          <div className="user__company">Компания: {selectedUser.company.name}</div>
          <div className="user__address">Адрес: {selectedUser.address.street}</div>
          <div className="user__comments">
            Все комментарии пользователя:
            <p className="user__comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, perferendis
              vel. Aliquid eius harum ipsam molestiae pariatur repudiandae tempora totam!
            </p>
            <p className="user__comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, adipisci alias
              aliquid animi consectetur consequuntur distinctio explicabo iure perspiciatis recusandae.
            </p>
            <p className="user__comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus facere in
              laborum laudantium magnam reprehenderit suscipit veritatis voluptate voluptatibus voluptatum.
            </p>
          </div>
        </div>
        <Route
          path={'/users/:id'}
          exact
          render={() => <Link to={'/users'} className={"user__back-list"}>К списку пользователей</Link>}
        />
        <Route
          path={'/users/:id'}
          exact
          render={() => <Link to={'/'} className={"user__back-main"}>На главную</Link>}
        />
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

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(User);

export default Wrapped;