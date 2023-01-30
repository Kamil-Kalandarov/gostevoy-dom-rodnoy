import { FC } from 'react';
import { Icon } from '../Icon/Icon';
import '../../fonts/Roboto-Bold.ttf';
import '../../fonts/Roboto-Medium.ttf';
import '../../fonts/Roboto-Regular.ttf';
import styles from './intro.module.css';
import whatsAppLogo from '../../images/whatsapp-logo.svg';
import telegramLogo from '../../images/telegram-logo.svg';
import istagramLogo from '../../images/istagram-logo.svg';

export const Intro: FC = () => {

  return (
    <section className={styles.intro}>
      <ul className={styles.intro__socialList}>
        <Icon link='https://Wa.me/79886690656' logo={whatsAppLogo} alt='WhatsAppLogo' />
        <Icon link='https://t.me/Evgeniya_rusaya' logo={telegramLogo} alt='TelegramLogo' />
        <Icon link='https://instagram.com/rodnoy_gostevoy?igshid=Yzg5MTU1MDY=' logo={istagramLogo} alt='InstagramLogo' />
      </ul>
      <div className={styles.intro__infoContainer}>
        <p className={styles.intro__adress}>п. Пересыпь, ул. Комсомольская 41</p>
        <div className={styles.intro__titleContainer}>
          <h1 className={styles.intro__title}>Гостевой дом "Родной" в поселке Пересыпь</h1>
        </div>
        <div className={styles.intro__locationInfoContainer}>
          <p className={styles.intro__locationInfo}>Недалеко от побережья Азовского моря в тихом районе. Пешком 10 мин. до центра и 5 мин. до моря</p>
        </div>
      </div>
    </section>
  )
};
