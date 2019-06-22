import React from 'react';
import './style.css';
import search from '../../assets/img/search.png';
import { Route, NavLink } from "react-router-dom";
import { bindActionCreators } from 'redux';
import actions from '../../actions/user';
import { connect } from 'react-redux';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  getList() {
    return this.props.pages.map((obj, i) => {
      return (
        <li
          className="nav__item" key = {i}
        >
          <NavLink to={obj.path}
                   exact={true}
            activeClassName={"active"} className={"nav__link"}
          >{obj.name}
          </NavLink>
        </li>
      )
    });
  }

  render() {
    return (
      <div className="nav">
        <div className="nav__wrap">
          <ul className="nav__list">
            <Route>{this.getList()}</Route>
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

const mapStateToProps = state => ({
  ...state.user
});

const mapDispatchToProps = dispatch => ({
  actions:bindActionCreators(actions, dispatch)
});

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default Wrapped;