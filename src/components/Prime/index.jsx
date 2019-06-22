import React from 'react';
import './style.css';
import blog from '../../assets/img/blog.jpg';

export default function Prime() {
  return (
    <div className="prime">
      <img src={blog} className="prime__img"/>
      <h3 className="prime__text">
        Войдите в систему !
      </h3>
      <p className="prime__user">
        Bret --> qwerty
      </p>
      <p className="prime__user">
        Antonette --> qwerty
      </p>
      <p className="prime__user">
      Samantha --> qwerty
      </p>
      <p
      className="prime__user">
        Karianne --> qwerty
      </p>
      <p className="prime__user">
      Kamren --> qwerty
      </p>
    </div>
  )
}