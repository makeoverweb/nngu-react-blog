import React, {Fragment} from 'react';
import UsersList from './index';
import User from './User';
import './style.css';
import { Route } from 'react-router-dom';

export default class UserContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Route
          path={'/users'}
          exact
          render={
            (props) =>
              <UsersList
                {...props}
                list={this.props.users}
                isLoading={this.props.isLoading}
              />
          }
        />
        <Route
          path={'/users/:id'}
          exact
          render={(props) => {
            const userId = +props.match.params.id;
            const selectedUser = this.props.users.find(user => user.id === userId);
            return <User {...selectedUser} />;
          }}
        />
      </Fragment>
    )
  }
}