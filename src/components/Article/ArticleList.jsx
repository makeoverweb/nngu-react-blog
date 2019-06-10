import React, {Fragment} from 'react';
import Article from './index';
import './style.css';

export default class ArticleList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const getImages = this.props.image.map(i => i.url);
    const getUsers = this.props.user.map(user => user.id);

    const getPosts = this.props.post.map((post, index) =>
      <Fragment key = { index }>
        <Article post = {post} image = { getImages[index] } userId = {getUsers[index]}/>
      </Fragment>);

    return (
      <Fragment>
        {getPosts}
        <div className="article__footer-button">
          <button className="article__view-all article__button">All posts</button>
          <button className="article__add-post article__button">Add post</button>
        </div>
      </Fragment>
    )
  }
}