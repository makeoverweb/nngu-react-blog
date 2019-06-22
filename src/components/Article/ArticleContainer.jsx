import React, {Fragment} from 'react';
import Article from './index';
import './style.css';
import ArticleList from "./ArticleList";
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import actions from '../../actions/user';
import { connect } from 'react-redux';

class ArticleContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Route
          path={'/articles'}
          exact
          component={ArticleList}
        />
        <Route
          path={'/articles/:id'}
          exact
          component={Article}
        />
      </Fragment>

    );
  }
}

const mapStateToProps = state => ({
  ...state.user
});

const mapDispatchToProps = dispatch => ({
  actions:bindActionCreators(actions, dispatch)
});

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);

export default Wrapped;