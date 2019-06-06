import React from 'react';
import './style.css';
import like from '../../assets/img/like.png';
import dislike from '../../assets/img/dislike.png';
import user from '../../assets/img/user.png';

export default class Article extends React.Component {

  constructor(props) {
    let counter = 0;
    let countLike = 5;

    super(props);

    this.state = {
      isOpen: false,
      isCount: counter,
      isLike: dislike,
      isCountLike: countLike
    };
  }

  render() {
    const { post, image} = this.props;

    const text = this.state.isOpen && <p className="article__text">
      {post.body}<a className="article__link-more">   Read more...</a>
    </p>;

    return (
      <div className="article">
        <a href="#" className="article__img-link">
          <img src={image} className="article__img"/>
        </a>
        <div className="article__wrap">
          <div className="article__post">

            <a className="article__avatar-link">
              <img src={user} className="article__avatar"/>
            </a>
            <div className="article__author">
              <span className="article__admin">Name{post.id}</span>
              <span className="article__time">Date{post.id}</span>
            </div>
          </div>
          <h3 className="article__title">{post.title}</h3>
          <button className="article__button" onClick={this.handleClick}>
            Open
          </button>
          {text}
          <div className="article__footer">
            <div className="article__footer-wrap">
              <span className="article__views">{this.state.isCount} views</span>
              <span className="article__comment">
                <a className="article__comment-link">Write a comment</a>
              </span></div>
            <div className="article__like">
              <img src={this.state.isLike} className="article__like-img"
                onClick={this.handleLike}
              />
              <span className="article__like-count">{this.state.isCountLike}</span>
            </div>
          </div>
          <div className="article__footer-button">
            <button className="article__edit article__button">Edit post</button>
            <button className="article__delete article__button">Delete post</button>
          </div>
        </div>
      </div>
    )
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      isCount: !this.state.isOpen ? `${++this.state.isCount}` : `${this.state.isCount}`
    })
  };

  handleLike = () => {
    this.setState ({
      isLike: this.state.isLike === like ? dislike : like,
      isCountLike: this.state.isLike === dislike ? `${++this.state.isCountLike}` : `${--this.state.isCountLike}`
    })
  }
};
