import React, {Fragment} from 'react';
import { Link, Route } from 'react-router-dom';
import mail from '../../assets/img/mail.png';
import phone from '../../assets/img/phone.png';

export default function User(user) {
  return (
    <Fragment>
      <p className="users__name">{user.name}</p>
      <div className="users__about">
        Контакты:
        <span className="users__mail">
          <img src={mail} className="users__mail-img"/>
          {user.email}</span>
        <span className="users__phone">
          <img src={phone}  className="users__phone-img"/>
          {user.phone}</span>
      </div>
      <Route
        path={'/users/:id'}
        exact
        render={() => <Link to={'/users'}>Назад к списку</Link>}
      />
      <Route
          path={'/users/:id'}
          exact
          render={() => <Link to={'/'}>На главную</Link>}
        />
    </Fragment>
  );
}