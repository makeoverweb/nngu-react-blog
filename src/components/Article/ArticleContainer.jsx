import React, {Fragment} from 'react';
import Article from './index';
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
          path={'/articles'}
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
        <Route
          path={'/articles/:id'}
          exact
          render={(props) => {
            const postId = +props.match.params.id;
            const selectedPost = this.props.post.find(post => post.id === postId);
            const selectedImage = this.props.image.find(image => image.id === postId);
            const selectedUser = this.props.user.find(user => user.id === postId);
            return <Article
              selectedImage={selectedImage}
              selectedUser={selectedUser}
              selectedPost={selectedPost}
            />;
          }}
        />
      </Fragment>

    );
  }
}