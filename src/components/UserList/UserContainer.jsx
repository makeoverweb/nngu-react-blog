import React, {Fragment} from 'react';
import UsersList from './index';
import User from './User';
import './style.css';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import actions from '../../actions/user';
import { connect } from 'react-redux';

class UserContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Route
          path={'/users'}
          exact
          component={UsersList}/>
        <Route
          path={'/users/:id'}
          exact
          component={User}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  ...state.user
});

const mapDispatchToProps = dispatch => ({
  actions:bindActionCreators(actions, dispatch)
});

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(UserContainer);

export default Wrapped;