export default class Popup {
  constructor(container = null, content = null, mainClass = 'popup') {
    this.container = container;
    this.content = content;
    this.mainClass = mainClass;
    this.popup = this.build();
    this.close = this.close.bind(this);

    this.init();
  }

  build() {
    const { mainClass } = this;
    const { status, subject, message } = this.content;
    const popup = document.querySelector('#popup__template').content.cloneNode(true);
    const layout = popup.querySelector('.popup__layout');

    layout.classList.add(mainClass);
    popup.querySelector('.popup__status').innerHTML = status;
    popup.querySelector('.popup__subject').innerHTML = subject;
    popup.querySelector('.popup__message').innerHTML = message;
    layout.addEventListener('click', this.close);

    return popup;
  }

  open() {
    const { container, popup } = this;
    container.append(popup);
  }

  close(event) {
    const { target } = event;
    const { container } = this;
    const popup = container.querySelector('.popup__layout');
    const button = popup.querySelector('.popup__close-button');
    if (target !== button) return;

    popup.remove();
  }

  init() {
    this.popup = this.build();
  }
}
