import React, {Fragment} from 'react';
import './style.css';
import like from '../../assets/img/like.png';
import dislike from '../../assets/img/dislike.png';
import user from '../../assets/img/user.png';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import actions from '../../actions/user';
import { connect } from 'react-redux';

class ArticleList extends React.Component {

  constructor(props) {

    super(props);
  }

  render() {
    console.log(this.props.countStatus[1].value)
    const getImages = this.props.getImage.map(i => i.url);
    const getUsers = this.props.getUsers.map(i => i.name);

    const getPosts = this.props.getPost.map((post, index) =>
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
                <img key = {post.id} src={this.props.likeStatus[post.id].name ? like : dislike} className="article__like-img"
                  onClick={() => this.props.actions.likeChange(post.id, this.props.isLoggedIn, this.props.likeStatus, this.props.countStatus)}
                />
                <span className="article__like-count">{this.props.countStatus[post.id].value}</span>
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

const mapStateToProps = state => ({
  ...state.user
});

const mapDispatchToProps = dispatch => ({
  actions:bindActionCreators(actions, dispatch)
});

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(ArticleList);

export default Wrapped;