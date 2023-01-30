import { combineReducers } from "redux";
import { sliderContentReducer } from "./sliderContentReducer";

export const rootReducer = combineReducers({
  appartamentSlider: sliderContentReducer
});
