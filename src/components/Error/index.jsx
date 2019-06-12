import React from 'react';
import './style.css';
import error from '../../assets/img/error.jpg';

export default function Error() {
  return (
    <div className="error">
      <img src={error} className="error__img"/>
    </div>
  )
}