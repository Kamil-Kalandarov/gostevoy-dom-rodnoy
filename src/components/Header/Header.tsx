import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import phoneLogo from '../../images/phone-logo.svg';

const Header: FC = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.header__nav}>
          <ul className={styles.header__linksList}>
            <li><Link to='/'/>Апартаменты</li>
            <li><Link to='/'/>Условия проживания</li>
            <li><Link to='/'/>Преимущества</li>
            <li><Link to='/'/>Бронирование</li>
          </ul>
          <div className={styles.header__phoneNumber}>
            <img src={phoneLogo} alt='phone-logo'/>
            <a href='+7 988 669 06 56'>+7 988 669 06 56</a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
