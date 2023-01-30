import { FC, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './app.module.css';
import { MainPage } from '../../pages/MainPage/MainPage';
import Header from '../Header/Header';
import { useDispatch } from 'react-redux';
import store from '../../services/store';

const App: FC = () => {

  return (
    <section className={styles.app}>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
      </main>
    </section>
  );
};

export default App;
