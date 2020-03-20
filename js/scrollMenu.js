import ActiveMenu from './activeMenu.js';
import { ELEMENTS } from './helper.js';
import { isDocumentBottomReached } from './utils.js';

export default class ScrollMenu extends ActiveMenu {
  constructor(container, targetClass, activeClass) {
    super(container, targetClass, activeClass);

    this.currentNavigationLink = null;
  }

  getCurrentNavigationLink() {
    if (isDocumentBottomReached()) return ELEMENTS.LAST_NAVIGATION_ITEM;

    const { container } = this;
    const headerHeight = ELEMENTS.HEADER.offsetHeight;
    const windowWidthMiddle = document.documentElement.clientWidth / 2;

    const elementUnderScroll = document.elementFromPoint(windowWidthMiddle, headerHeight + 1);
    const currentSection = elementUnderScroll.closest('section[data-navigation]');
    const navigationLinkHref = currentSection.dataset.navigation;
    const currentNavigationLink = container.querySelector(`a[href="${navigationLinkHref}"]`);

    return currentNavigationLink;
  }

  scrollHandler() {
    const { currentNavigationLink } = this;
    const target = this.getCurrentNavigationLink();
    if (currentNavigationLink === target) return;

    this.setCurrentNavigationLink(target);
    this.toggleStates(target);
  }

  setCurrentNavigationLink(target) {
    this.currentNavigationLink = target;
  }

  addScrollHandler() {
    document.addEventListener('scroll', this.scrollHandler.bind(this));
  }

  addHandlers() {
    this.addScrollHandler();
  }

  init() {
    this.scrollHandler();
    super.init();
  }
}
