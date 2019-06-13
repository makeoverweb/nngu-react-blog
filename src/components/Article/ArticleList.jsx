import React, {Fragment} from 'react';
import './style.css';
import like from '../../assets/img/like.png';
import dislike from '../../assets/img/dislike.png';
import user from '../../assets/img/user.png';
import { Link } from 'react-router-dom';

export default class ArticleList extends React.Component {

  constructor(props) {

    super(props);
  }

  render() {
    const getImages = this.props.image.map(i => i.url);
    const getUsers = this.props.user.map(i => i.name);

    const getPosts = this.props.post.map((post, index) =>
      <Fragment key = { index }>
        <div className="article">
          <a className="article__img-link">
            <img src={getImages[index]} className="article__img"/>
          </a>
          <div className="article__wrap">
            <div className="article__post">
              <Link to={'/users/' + post.id} className = "article__avatar-link">
                <img src={user} className="article__avatar"/>
              </Link>
              <div className="article__author">
                <span className="article__admin">{getUsers[index]}</span>
                <span className="article__time">Published 05.03.19</span>
              </div>
            </div>
            <h3 className="article__title">{post.title}</h3>
            <p className="article__text">
              {post.body}<Link to={'/articles/' + post.id}
                               className="article__link-more"
                         >   Read more...</Link>
            </p>
            <div className="article__footer">
              <div className="article__footer-wrap">
                <span className="article__views">views</span>
              </div>
              <div className="article__like">
                <img key = {post.id} src={this.props.likeStatus[post.id] ? dislike : like} className="article__like-img"
                  onClick={() => this.props.handleLike(post.id)}
                />
                <span className="article__like-count">{this.props.countStatus[post.id]}</span>
              </div>
            </div>
          </div>
        </div>
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