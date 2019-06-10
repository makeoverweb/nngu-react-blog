import React, {Fragment} from 'react';
import './style.css';
import axios from 'axios';
import UserContainer from '../UserList/UserContainer';
import Sidebar from '../Sidebar/index';
import ArticleContainer from "../Article/ArticleContainer";
import { Switch, Route } from 'react-router-dom';

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

    const aboutMe = () => {
      return <div><h1>Какая то информация</h1></div>;
    };

    const article = () => {
      return <div><h1>Какая то информация</h1></div>;
    };

    const news = () => {
      return <div><h1>News</h1></div>;
    };

    const guides = () => {
      return <div><h1>Гайды</h1></div>;
    };
    return (
      <div className="content">
        <div className="content__wrap">
          <div className="content__left">
            <Fragment>
              <Switch>
                <Route
                  path="/" exact render={(props)=>
                  <ArticleContainer post = {this.state.getPost}
                                    image = {this.state.getImage}
                                    user = {this.state.getUsers}
                                    {...props}/>}
                />
                <Route
                  path="/users"  render={(props)=>
                  <UserContainer users = {this.state.getUsers} {...props}/>}
                />
                <Route path="/guides" component={guides} />
                <Route path="/News" component={news} />
                <Route path="/about" component={aboutMe} />
                <Route path="/article/:id" component={article} />
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