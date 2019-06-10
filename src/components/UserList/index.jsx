import React, {Fragment} from 'react';
import User from './User';
import { Link, Route } from 'react-router-dom';

export default class UsersList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'users'}>
        <h3 className="users__title">Список пользователей</h3>
        <ul className="users__list">
          {this.props.isLoading && <span>Загрузка...</span>}
          {
            this.props.list.map((user, i) => {
              return (
                <li key={i} className="users__item">
                  <User {...user} />
                  <Link to={'/users/' + user.id} className = 'users__user'>
                    Перейти в профиль
                  </Link>
                </li>
              );
            })
          }
        </ul>
        <Route
          path={'/users'}
          exact
          render={() => <Link to={'/'} className = "users__main">На главную</Link>}
        />
      </div>
    )
  }
}