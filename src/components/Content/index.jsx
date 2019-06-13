import React, {Fragment} from 'react';
import './style.css';
import UserContainer from '../UserList/UserContainer';
import Sidebar from '../Sidebar/';
import ArticleContainer from "../Article/ArticleContainer";
import { Switch, Route } from 'react-router-dom';
import Prime from '../Prime';
import Error from '../Error';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const news = () => {
      return <div><h2>News</h2></div>;
    };
    return (
      <div className="content">
        <div className="content__wrap">
          <div className="content__left">
            <Fragment>
              <Switch>
                <Route path="/" exact component={Prime} />
                <Route
                  path="/articles" render={()=>
                  <ArticleContainer post = {this.props.post}
                                    image = {this.props.image}
                                    user = {this.props.user}
                                    accessRight={this.props.accessRight}
                  />}
                />
                <Route
                  path="/users"  render={()=>
                  <UserContainer users = {this.props.user}/>}
                />
                <Route path="/news" component={news} />
                <Route path="/about" component={Error} />
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