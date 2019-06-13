import React from 'react';
import '../assets/css/global.css';
import './style.css';
import  '../assets/img/main-bg.jpg'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Navigation from './Navigation';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      getPost: [],
      getImage: [],
      getUsers: [],
      accessRight: false
    };

    this.pages = [
      { name: 'Главная', path: '/' },
      { name: 'Статьи', path: '/articles' },
      { name: 'Пользователи', path: '/users' },
      { name: 'Новости', path: '/news' },
      { name: 'Обо мне', path: '/about' }
    ];
  }

  transformRight = () => {
    this.setState({
      accessRight: true
    })
  };

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
    return (
      <Router>
        <div className="main">
        <Header
          pages={this.pages}
          users = {this.state.getUsers}
          transformRight={this.transformRight}
          accessRight={this.state.accessRight}
        />
        <Navigation
          pages={this.pages}
        />
        <Content
          post = {this.state.getPost}
          image = {this.state.getImage}
          user = {this.state.getUsers}
          accessRight={this.state.accessRight}
        />
        <Footer/>
      </div>
      </Router>
    )
  }
};