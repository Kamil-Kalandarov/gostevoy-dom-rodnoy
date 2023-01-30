import { FC } from "react";
import { TSlider } from "../../../utils/types/dataType";


export const SlideContent: FC<TSlider> = (props) => {

  return (
    <li key={props.id}>
      <img key={props.id} src={props.src} alt='appartamentsExample'/>
    </li>
  )
};
