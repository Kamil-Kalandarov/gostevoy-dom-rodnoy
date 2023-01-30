import { FC } from 'react';
import styles from './mainPage.module.css';
import { Intro } from '../../components/Intro/Intro';
import { Description } from '../../components/Description/Description';
import { Appartments } from '../../components/Appartments/Appartments';

export const MainPage: FC = () => {
  return (
      <section className={styles.mainPage}>
          <Intro />
          <Description />
          <Appartments />
      </section>
  )
}
