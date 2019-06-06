import React from 'react';
import './style.css';
import logo from '../../assets/img/logo.png';

export default function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="" className="logo__image"/>
      <div className="logo__title">
        <span className="logo__text-white">Мой</span>
        <span className="logo__text-blue">блог</span>
      </div>
    </div>
  )
}