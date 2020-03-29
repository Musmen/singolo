import { disableTab, disableDocumentScroll, enableDocumentScroll } from './utils';
import { ELEMENTS } from './helper';
import Popup from './popup';

export default class BurgerMenu extends Popup {
  constructor(container = null) {
    super(container);
    this.isOpen = false;
    this.burgerMenuButton = null;
  }

  build() {
    const logo = ELEMENTS.HEADER.querySelector('.logo').cloneNode(true);
    const navigation = ELEMENTS.HEADER.querySelector('#navigation').cloneNode(true);
    navigation.classList.add('display-flex');

    const popup = document.querySelector('#burger__template').content.cloneNode(true);
    const layout = popup.querySelector('.burger__layout');
    const wrapper = popup.querySelector('.burger__wrapper');
    wrapper.append(logo);
    wrapper.append(navigation);

    layout.addEventListener('click', this.burgerMenuClickHandler.bind(this));

    return popup;
  }

  open() {
    const { container } = this;
    const popup = this.build();

    container.append(popup);

    const popupLayout = container.querySelector('.burger__layout');
    popupLayout.focus();
    popupLayout.addEventListener('keydown', disableTab.bind(this));

    disableDocumentScroll('overflow-hidden-burger');
    this.isOpen = true;
    this.rotateBurgerMenuButtonIcon();
  }

  close() {
    const { container } = this;
    const popup = container.querySelector('.burger__layout');
    popup.remove();

    enableDocumentScroll('overflow-hidden-burger');
    this.isOpen = false;
    this.rotateBurgerMenuButtonIcon();
  }

  rotateBurgerMenuButtonIcon() {
    this.burgerMenuButton.classList.toggle('rotate');
  }

  burgerMenuButtonClickHandler() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  burgerMenuClickHandler(event) {
    if (!event.target.classList.contains('navigation__link')
      && !event.target.className.includes('logo')
      && !event.target.classList.contains('burger__layout')) return;
    this.close();
  }

  init() {
    this.burgerMenuButton = document.querySelector('#burger');
    this.burgerMenuButton.addEventListener('click', this.burgerMenuButtonClickHandler.bind(this));
  }
}
