import React from 'react';
import './style.css';
import ArticleList from '../Article/ArticleList';
import UserList from '../UserList';
import Sidebar from '../Sidebar/index';

export default class Content extends React.Component {
  constructor(props) {
    super(props);

    this.getPageComponent = this.getPageComponent.bind(this);
  }

  getPageComponent() {
    switch (this.props.pageId) {
      case 0:
        return <ArticleList/>;
      case 1:
        return < UserList/>;
      case 2:
        return <div><h1>ССылки</h1></div>;
      case 3:
        return <div><h1>Какая то информация</h1></div>;
      case 4:
        return <div><h1>Мои контакты</h1></div>;
      default:
        return <div><h1>Не удалось загрузить данные с сервера</h1></div>;
    }
  }

  render() {
    return (
      <div className="content">
        <div className="content__wrap">
          <div className="content__left">
            {this.getPageComponent()}
          </div>
          <div className="content__right">
            <Sidebar/>
          </div>
        </div>
      </div>
    )
  }
}