import { GET_SLIDER_CONTENT } from '../actions/sliderContentAction';
import { IGetSliderContent } from '../actions/sliderContentAction';
import appartamentExample from '../../images/appartaments.png';
import { TSlider } from '../../utils/types/dataType';

type TAppartamentsState = {
  data: ReadonlyArray<TSlider>
}

const initialState: TAppartamentsState = {
  data: [
    { id:1, src: appartamentExample},
    { id:2, src: appartamentExample},
    { id:3, src: appartamentExample},
    { id:4, src: appartamentExample},
    { id:5, src: appartamentExample},
  ]
}

export const sliderContentReducer = (state = initialState, action: IGetSliderContent): TAppartamentsState => {
  switch(action.type) {
    /* case GET_SLIDER_CONTENT: {
      return {
        ...state,
      }
    } */
    default: {
      return state
    } 
  }
};
