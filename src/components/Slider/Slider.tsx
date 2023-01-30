import { FC } from "react";
import styles from './slider.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlideContent } from "./SlideContent/SlideContent";
import { useSelector } from "react-redux";
import store from "../../services/store";
import { TSlider } from "../../utils/types/dataType";

type Tprops = {
  modules: any,
  spaceBetween: number,
  slidesPerView: number,
  pagination: boolean,
}

type RootState = ReturnType<typeof store.getState>

export const Slider: FC<Tprops> = (props) => {

  const sliderContentData = useSelector((store: RootState) => store.appartamentSlider.data)

  const SliderContentElemets = sliderContentData.map((el: TSlider) => {
    return (
      <SwiperSlide key={el.id}>
        <ul className={styles.slideContentList}>
          <SlideContent src={el.src} id={el.id}/>
        </ul>
      </SwiperSlide>
    )
  })

  return (
    <section className={styles.appartments}>
      <Swiper
        modules={props.modules}
        spaceBetween={props.spaceBetween}
        slidesPerView={props.slidesPerView}
        navigation
        pagination={props.pagination}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {SliderContentElemets}
     </Swiper>
    </section>
  )
};
