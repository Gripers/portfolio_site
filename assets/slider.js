import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

var $ = require('jquery');

if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}

export const projectsCarouselConfig = {
  items: 1,
};
