import React from 'react';
import '../assets/css/global.css';
import './style.css';
import  '../assets/img/main-bg.jpg'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Navigation from './Navigation';
import { BrowserRouter as Router } from 'react-router-dom';

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.pages = [
      { name: 'Главная', path: '/' },
      { name: 'Статьи', path: '/articles' },
      { name: 'Пользователи', path: '/users' },
      { name: 'Новости', path: '/news' },
      { name: 'Обо мне', path: '/about' }
    ];
  }

  render() {
    return (
      <Router>
        <div className="main">
        <Header/>
        <Navigation
          pages={this.pages}
        />
        <Content/>
        <Footer/>
      </div>
      </Router>
    )
  }
};