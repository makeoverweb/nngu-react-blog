import React from 'react';
import './style.css';
import blog from '../../assets/img/blog.jpg';

export default function Prime() {
  return (
    <div className="prime">
      <img src={blog} className="prime__img"/>
      <h3 className="prime__text">
        не забудьте зарегистрироваться
      </h3>
    </div>
  )
}