import {ENTER_KEY} from './helper.js';

export default class ActiveMenu {
  constructor(container, targetClass, activeClass) {
    this.container = container;
    this.targetClass = targetClass;
    this.activeClass = activeClass;
  }

  removeActiveState = () => {
    const { container, targetClass, activeClass } = this;

    container.querySelectorAll(`.${targetClass}`)
      .forEach((item) => {
        item.classList.remove(activeClass);
      });
  }

  setActiveState = (target) => {
    const { activeClass } = this;

    target.classList.add(activeClass);
  }

  toggleStates = (target) => {
    const { targetClass, removeActiveState, setActiveState } = this;

    if (!target.classList.contains(targetClass)) return;
    removeActiveState();
    setActiveState(target);
  }

  clickHandler = (event) => {
    const { target } = event;
    const { toggleStates } = this;

    toggleStates(target);
  }

  enterPressedHandler = (event) => {
    const { target, key } = event;
    const { toggleStates } = this;

    if (key !== ENTER_KEY) return;
    toggleStates(target);
  }

  addHandlers = () => {
    const { container, clickHandler, enterPressedHandler } = this;

    container.addEventListener('click', clickHandler);
    container.addEventListener('keyup', enterPressedHandler);
  }

  init = () => {
    const { addHandlers } = this;
    addHandlers();
  }
}