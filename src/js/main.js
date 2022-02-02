import modals from "./modules/modals";
import slider from './modules/slider';

window.addEventListener('load', () => {


  
    modals();
    slider('.main-slider', '.main-slider-item', 1, 3000, 1)
    slider('.feedback-slider', '.feedback-slider-item', 1, 3000, 2)


})