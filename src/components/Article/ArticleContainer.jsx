import React, {Fragment} from 'react';
import Article from './index';
import User from '../UserList/User';
import './style.css';
import ArticleList from "./ArticleList";
import { Route } from 'react-router-dom';

export default class ArticleContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Route
          path={'/'}
          exact
          render={
            (props) =>
            <ArticleList
              {...props}
              post={this.props.post}
              image={this.props.image}
              user={this.props.user}
            />
          }
        />
        {/*<Route*/}
        {/*  path={'/users/:id'}*/}
        {/*  exact*/}
        {/*  render={(props) => {*/}
        {/*    const userId = +props.match.params.id;*/}
        {/*    const selectedUser = this.props.users.find(user => user.id === userId);*/}
        {/*    return <User {...selectedUser} />;*/}
        {/*  }}*/}
        {/*/>*/}
      </Fragment>
    );
  }
}