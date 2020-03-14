import ActiveMenu from './activeMenu.js';

export default class TagsMenu extends ActiveMenu {
  constructor(container, targetClass, activeClass) {
    super(container, targetClass, activeClass);

    this.portfolioImages = null;
    this.imageItems = null;
  }

  toggleStates(target) {
    super.toggleStates(target);
    this.changePortfolioImages(target);
  }

  getNewPortfolioImages(selectedTag) {
    const { imageItems } = this;
    const selectedTagName = selectedTag.getAttribute('data-tag');
    const newPortfolio = document.createDocumentFragment();

    imageItems.forEach((item) => {
      const imageTagName = item.children[0].getAttribute('data-tag');
      if (imageTagName === selectedTagName) {
        newPortfolio.prepend(item);
      } else {
        newPortfolio.append(item);
      }
    });

    return newPortfolio;
  }

  changePortfolioImages(selectedTag) {
    const { portfolioImages } = this;
    const newPortfolio = this.getNewPortfolioImages(selectedTag);

    portfolioImages.innerHTML = '';
    portfolioImages.append(newPortfolio);
  }

  init() {
    this.selectedTag = document.querySelector('tags__button_active');
    this.portfolioImages = document.querySelector('#portfolioImages');
    this.imageItems = [...this.portfolioImages.querySelectorAll('.images__item')];
    super.init();
  }
}
