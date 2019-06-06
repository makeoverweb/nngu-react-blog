import React from 'react';
import '../assets/css/global.css';
import './style.css';
import  '../assets/img/main-bg.jpg'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Navigation from './Navigation';

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePageId: 0
    };

    this.pages = [
      { pageId: 0, name: 'Статьи' },
      { pageId: 1, name: 'Пользователи' },
      { pageId: 2, name: 'Гайды' },
      { pageId: 3, name: 'Новости' },
      { pageId: 4, name: 'Обо мне' }
    ];

    this.setPageId = this.setPageId.bind(this);
  }

  setPageId(pageId) {
    this.setState({
      activePageId: pageId,
    });
  }

  render() {
    return (
      <div className="main">
        <Header/>
        <Navigation
          pages={this.pages}
          setPageId={this.setPageId}
        />
        <Content pageId = {this.state.activePageId}/>
        <Footer/>
      </div>
    )
  }
};