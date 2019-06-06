import React from 'react';
import './style.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrap">
        <h3 className="footer__title">Contact me</h3>
        <span className="footer__phone">Tel: 123-456-789</span>
        <span className="footer__email">info@mymail.ru</span>
        <p className="footer__copyright">
          © 2023 by UNN Lobachevsky. Proudly created with hello.com
        </p>
      </div>
    </div>
  )
}