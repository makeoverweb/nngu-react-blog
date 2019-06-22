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
                <Route path="/login" exact component={Prime} />
                <Route path="/register" exact component={Prime} />
                <Route
                  path="/articles" component={ArticleContainer}
                />
                <Route
                  path="/users"  component={UserContainer}
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