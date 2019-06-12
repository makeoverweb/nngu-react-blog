import React, {Fragment} from 'react';
import './style.css';
import axios from 'axios';
import UserContainer from '../UserList/UserContainer';
import Sidebar from '../Sidebar/';
import Article from '../Article/';
import ArticleContainer from "../Article/ArticleContainer";
import { Switch, Route } from 'react-router-dom';
import Prime from '../Prime';
import Error from '../Error';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getPost: [],
      getImage: [],
      getUsers: []
    };
  }

  componentDidMount() {

    (async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      await Promise.all([
        axios.get('https://jsonplaceholder.typicode.com/posts/'),
        axios.get('https://jsonplaceholder.typicode.com/photos/'),
        axios.get('https://jsonplaceholder.typicode.com/users/')
        ])
        .then(axios.spread( (posts, images, users) => {
          const getPost = posts.data.slice(0, 5);
          this.setState({getPost});
          const getImage = images.data.slice(0, 5);
          this.setState({getImage});
          const getUsers = users.data.slice(0, 5);
          this.setState({getUsers});
        }))
        .catch(function (error) {
          console.log(error);
        });
    })();
  }

  render() {

    const news = () => {
      return <div><h1>News</h1></div>;
    };

    return (
      <div className="content">
        <div className="content__wrap">
          <div className="content__left">
            <Fragment>
              <Switch>
                <Route path="/" exact component={Prime} />
                <Route
                  path="/articles" render={()=>
                  <ArticleContainer post = {this.state.getPost}
                                    image = {this.state.getImage}
                                    user = {this.state.getUsers}
                  />}
                />
                <Route
                  path="/users"  render={()=>
                  <UserContainer users = {this.state.getUsers}/>}
                />
                <Route path="/news" component={news} />
                <Route path="/about" component={Error} />
              </Switch>
            </Fragment>
          </div>
          <div className="content__right">
            <Sidebar/>
          </div>
        </div>
      </div>
    )
  }
}