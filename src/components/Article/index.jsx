import React from 'react';
import './style.css';
import like from '../../assets/img/like.png';
import dislike from '../../assets/img/dislike.png';
import user from '../../assets/img/user.png';
import { Link, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import actions from '../../actions/user';
import { connect } from 'react-redux';

class Article extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const postId = +this.props.match.params.id;
    const selectedPost = this.props.getPost.find(post => post.id === postId);
    const selectedImage = this.props.getImage.find(image => image.id === postId);
    const selectedUser = this.props.getUsers.find(user => user.id === postId);

    const text =<p className="article__text">
      {selectedPost.body}

      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur iure nobis non odit omnis. Animi culpa eaque eum inventore maiores natus repudiandae vel vero voluptate voluptatibus. Ab accusamus adipisci amet aut cumque deleniti doloribus dolorum ducimus et facilis in iure magni maxime minima minus nam natus nemo nihil nobis nostrum numquam praesentium quam quidem quos rem repellat sapiente, sit soluta tempora unde? Accusantium animi beatae, deserunt doloremque eius fugit iste iure laborum magnam maxime mollitia natus officia perspiciatis porro praesentium quae ratione reiciendis saepe soluta voluptas. Commodi nisi quas repellat repellendus repudiandae temporibus! Ab accusantium alias aliquam aliquid beatae consequuntur dicta ea earum eos error et eum excepturi fuga fugit hic id in maxime minima, minus mollitia natus necessitatibus nisi nobis non odio odit perferendis porro quibusdam quisquam quos, repellat repellendus temporibus ut veritatis voluptate voluptatem voluptatibus? Assumenda blanditiis corporis ducimus earum est explicabo facere incidunt ipsa, ipsam ipsum minima non nulla provident quae quas recusandae repellendus, saepe temporibus vel voluptas. Alias aliquam delectus laudantium minus sapiente tempore vitae? Nam, odio, quod? Accusamus corporis deleniti dicta dolor dolore doloremque doloribus ex exercitationem expedita fuga ipsam iste libero nemo neque nobis odit, optio perferendis quibusdam quisquam quo quod quos voluptas. Rem.
    </p>;

    return (
      <div className="article">
        <a className="article__img-link">
          <img src={selectedImage.url} className="article__img"/>
        </a>
        <div className="article__wrap">
          <div className="article__post">
            <Link to={'/users/' + selectedPost.id} className = "article__avatar-link">
              <img src={user} className="article__avatar"/>
            </Link>
            <div className="article__author">
              <span className="article__admin">{selectedUser.name}</span>
              <span className="article__time">Published 05.03.19</span>
            </div>
          </div>
          <h3 className="article__title">{selectedPost.title}</h3>
          {text}
          <div className="article__comments">Comments</div>
          {
            this.props.userSendComment
              .map((item, id) => item.itemId === selectedPost.id ? (<div key={id}>
                <h3 key={id + 1}>{this.props.userLogin}</h3>
                <p key={id + 2} className="article__user-comment">{item.itemText}</p>
              </div>) : false)
          }
          <div className="article__footer">
            <div className="article__footer-wrap">
              <span className="article__comment">
                  <form >
                    <input
                    name="comment"
                    cols="40" rows="3"
                    className="article__textarea"
                    placeholder="Write a comment"
                    onChange={(e) => this.props.actions.inputComment(e.target.value)}
                    type="text"
                  >
                  </input>
                  <button
                    className="article__button article__button--submit"
                    onClick={() => {
                      this.props.actions.sendComment(this.props.userInputComment, this.props.userSendComment, selectedPost.id, this.props.isLoggedIn)
                    }}
                    type="reset"
                  >
                    Send
                  </button>
                  </form>
                </span>
            </div>
            <div className="article__like">
              <img src={this.props.likeStatus[selectedPost.id].name ? like : dislike} className="article__like-img"
                onClick={() => this.props.actions.likeChange(selectedPost.id, this.props.isLoggedIn,this.props.likeStatus, this.props.countStatus)}
              />
            </div>
          </div>
          <div className="article__footer-button">
            <button className="article__edit article__button">Edit post</button>
            <button className="article__delete article__button">Delete post</button>
          </div>
        </div>
        <Route
          path={'/articles/:id'}
          exact
          render={() => <Link to={'/articles'} className={"articles__back"}>Назад</Link>}
         />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.user
});

const mapDispatchToProps = dispatch => ({
  actions:bindActionCreators(actions, dispatch)
});

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(Article);

export default Wrapped;
