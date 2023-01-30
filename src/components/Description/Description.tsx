import { FC } from "react";
import styles from './description.module.css';

export const Description: FC = () => {
  return (
    <section>
      <div className={styles.description}>
        <p className={styles.description__text}>Гостевой дом Родной это 9 апартаментов 17 соток 1 бассейн 5 минут к МОРЮ
         500 кВ м газона 30 плодовых деревьев 3 владельцев живущих тут же Евгения, Рифат и сынок Дамир
        </p>
      </div>
    </section>
  )
};
