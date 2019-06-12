import React from 'react';
import './style.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h3 className="sidebar__title">Categories</h3>
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <a href="#" className="sidebar__link">
            Статьи <span className="sidebar__link-all">(15)</span>
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#" className="sidebar__link">
            Пользователи <span className="sidebar__link-all">(10)</span>
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#" className="sidebar__link">
            Новости <span className="sidebar__link-all">(11)</span>
          </a>
        </li>
      </ul>

      <h3 className="sidebar__title sidebar__things-like">Things i love</h3>
      <ul className="sidebar__list sidebar__like-list">
        <li className="sidebar__item like-list__item">
          <a href="#" className="sidebar__link like-list__link">Twitter</a>
        </li>
        <li className="sidebar__item like-list__item">
          <a href="#" className="sidebar__link like-list__link">Dribble</a>
        </li>
        <li className="sidebar__item like-list__item">
          <a href="#" className="sidebar__link like-list__link">YouTube</a>
        </li>
        <li className="sidebar__item like-list__item">
          <a href="#" className="sidebar__link like-list__link">Toster</a>
        </li>
        <li className="sidebar__item like-list__item">
          <a href="#" className="sidebar__link like-list__link">StackOverflow</a>
        </li>
      </ul>
    </aside>
  )
}