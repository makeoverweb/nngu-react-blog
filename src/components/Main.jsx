import React, {Fragment} from 'react';
import '../assets/css/global.css';
import './style.css';
import  '../assets/img/main-bg.jpg'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Navigation from './Navigation';
import { bindActionCreators } from 'redux';
import actions from '../actions/user';
import { connect } from 'react-redux';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.getPlaceholderList();
  }

  render() {
    return (
      <Fragment>
        <div className="main">
          <Header/>
          <Navigation/>
          <Content/>
          <Footer/>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  actions:bindActionCreators(actions, dispatch)
});

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(Main);

export default Wrapped;