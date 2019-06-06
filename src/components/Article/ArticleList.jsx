import React, {Fragment} from 'react';
import axios from 'axios';
import Article from './index';
import './style.css';

export default class ArticleList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      getPost: [],
      getImage: [],
    }
  }

  componentDidMount() {

    (async () => {
      await Promise.all([
        axios.get('https://jsonplaceholder.typicode.com/posts'),
        axios.get('https://jsonplaceholder.typicode.com/photos')
        ])
        .then(axios.spread( (posts, images) => {
          const getPost = posts.data.slice(0, 5);
          this.setState({getPost});
          const getImage = images.data.slice(0, 5);
          this.setState({getImage})
        }))
        .catch(function (error) {
          console.log(error);
        });
    })();
  }

  render() {

    const getImages= this.state.getImage.map(i => i.url);

    const getPosts = this.state.getPost.map((post, index) =>
      <Fragment key = { index }><Article post = {post} image = { getImages[index] }/></Fragment>);

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