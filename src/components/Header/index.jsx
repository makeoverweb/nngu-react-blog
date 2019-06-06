import React from 'react';
import './style.css';
import Logo from '../Logo';

export default function Header() {
  return(
    <div className="header">
      <div className="header__wrap">
        <Logo/>
      </div>
    </div>
  )
}