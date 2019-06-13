import React, {Fragment} from 'react';
import Article from './index';
import './style.css';
import ArticleList from "./ArticleList";
import { Route } from 'react-router-dom';

export default class ArticleContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likeStatus: [true, true, true, true, true, true],
      countStatus: [12, 4, 30, 8, 4, 21],
      // viewStatus: [12, 4, 30, 8, 4, 21]
    };
  }

  handleLike = (i) => {
    if(this.props.accessRight) {
      const newStatus = this.state.likeStatus;
    newStatus[i] = !this.state.likeStatus[i];

    const newCount = this.state.countStatus;
    newCount[i] = !this.state.likeStatus[i] ? `${++newCount[i]}` : `${--newCount[i]}`;

    this.setState ({
      likeStatus: newStatus,
      countStatus: newCount
    })
    }
  };

  // handleView = (i) => {
  //   const newView = this.state.viewStatus;
  //   newView[i] = !this.state.viewStatus[i];
  //
  //   this.setState ({
  //     viewStatus: newView
  //   })
  // };

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
              likeStatus={this.state.likeStatus}
              countStatus={this.state.countStatus}
              // viewStatus={this.state.viewStatus}
              handleLike={this.handleLike}
              // handleView={this.handleView}
              accessRight={this.props.accessRight}
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
              likeStatus={this.state.likeStatus}
              countStatus={this.state.countStatus}
              handleLike={this.handleLike}
            />;
          }}
        />
      </Fragment>

    );
  }
}