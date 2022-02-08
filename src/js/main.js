import modals from "./modules/modals";
import slider from './modules/slider';
import forms from "./modules/forms";
import showMore from "./modules/showMore";

window.addEventListener('load', () => {


  
    modals();
    slider('.slider','.main-slider', '.main-slider-item', 1, 3000, 1);
    slider('.slider2','.feedback-slider', '.feedback-slider-item', 1, 3000, 2, '.main-next-btn');
    forms();
    showMore('.button-styles', '.styles-2')


})