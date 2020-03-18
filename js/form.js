import { FORM_DEFAULT_TEXT } from './helper.js';
import { disableTab } from './utils.js';
import Popup from './popup.js';

export default class Form {
  constructor() {
    this.form = null;
    this.subjectField = null;
    this.messageField = null;
    this.formSubmitButton = null;
    this.popup = null;
  }

  disableTabOnOpenPopup(popup) {
    popup.addEventListener('keydown', disableTab);
  }

  enableTabOnClosePopup(popup) {
    const { formSubmitButton } = this;

    popup.removeEventListener('keydown', disableTab);
    formSubmitButton.focus();
    this.form.reset();
  }

  getMessageText() {
    const defaultSubject = FORM_DEFAULT_TEXT.SUBJECT;
    const defaultMessage = FORM_DEFAULT_TEXT.MESSAGE;
    const subject = this.subjectField.value;
    const message = this.messageField.value;

    return {
      status: FORM_DEFAULT_TEXT.STATUS,
      defaultSubject,
      defaultMessage,
      subject,
      message,
    };
  }

  submitHandler(event) {
    event.preventDefault();

    const { popup } = this;
    const content = this.getMessageText();

    popup.open(content);
  }

  addHandlers() {
    this.form.addEventListener('submit', this.submitHandler.bind(this));
  }

  init() {
    this.form = document.querySelector('#feedback__form');
    this.subjectField = this.form.querySelector('#form__subject');
    this.messageField = this.form.querySelector('#form__message');
    this.formSubmitButton = this.form.querySelector('#form__submit');

    const onOpenPopupCallBack = this.disableTabOnOpenPopup.bind(this);
    const onClosePopupCallBack = this.enableTabOnClosePopup.bind(this);

    this.popup = new Popup(this.form, 'form__popup', onOpenPopupCallBack, onClosePopupCallBack);

    this.addHandlers();
  }
}
