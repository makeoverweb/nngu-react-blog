import React from 'react';
import './style.css';
import Logo from '../Logo';
import SignIn from "../Register";

export default function Header(props) {
  let userrLogin = props.users[2];
  return(
    <div className="header">
      <div className="header__wrap">
        <Logo/>
        <SignIn
          userrLogin={userrLogin}
          transformRight={props.transformRight}
          accessRight={props.accessRight}
        />
      </div>
    </div>
  )
}