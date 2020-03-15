import ActiveMenu from './js/activeMenu.js';
import TagsMenu from './js/tagsMenu.js';
import Slider from './js/slider.js';
import Form from './js/form.js';

window.onload = () => {
  const mainNavigation = document.querySelector('#mainNavigation');
  const mainNavigationActiveMenu = new ActiveMenu(mainNavigation, 'navigation__link', 'navigation__link_active');
  mainNavigationActiveMenu.init();

  const portfolioImages = document.querySelector('#portfolioImages');
  const portfolioImagesActiveMenu = new ActiveMenu(portfolioImages, 'portfolio__image', 'portfolio__image_active');
  portfolioImagesActiveMenu.init();

  const tagsList = document.querySelector('#tagsList');
  const tagsListActiveMenu = new TagsMenu(tagsList, 'tags__button', 'tags__button_active');
  tagsListActiveMenu.init();

  const slider = new Slider();
  slider.init();

  const form = new Form();
  form.init();
};
