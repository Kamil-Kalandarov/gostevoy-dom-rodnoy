import { FC } from "react";
import styles from './appartments.module.css';
import { Slider } from "../Slider/Slider";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

export const Appartments: FC = () => {

  return (
    <section className={styles.appartments}>
      <Slider 
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={true}
      />
    </section>
  )
};
