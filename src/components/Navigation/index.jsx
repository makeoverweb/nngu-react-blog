import React from 'react';
import './style.css';
import search from '../../assets/img/search.png';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  getList() {
    return this.props.pages.map((obj, i) => {
      return (
        <li className="nav__item" key={i}
        >
          <a
            className="nav__link"
            onClick={() => this.props.setPageId(obj.pageId)}
          >{obj.name}
          </a>
        </li>
      )
    });
  }

  render() {
    return (
      <div className="nav">
        <div className="nav__wrap">
          <ul className="nav__list">
            {this.getList()}
          </ul>
          <span className="nav__search-wrap">
            <input type="search" className="nav__search" placeholder="Search"/>
            <img src={search} className="nav__search-img"/>
          </span>
        </div>
      </div>
    )
  }
}