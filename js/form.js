import { FORM_DEFAULT_TEXT, FORM_SEND_TEXT } from './helper.js';
import Popup from './popup.js';

export default class Form {
  constructor() {
    this.form = null;
    this.subjectField = null;
    this.messageField = null;
  }

  getMessageText() {
    let subject = this.subjectField.value;
    let message = this.messageField.value;
    subject = subject ? `${FORM_SEND_TEXT.SUBJECT} ${subject}` : FORM_DEFAULT_TEXT.SUBJECT;
    message = message ? `${FORM_SEND_TEXT.MESSAGE} ${message}` : FORM_DEFAULT_TEXT.MESSAGE;

    return {
      status: FORM_DEFAULT_TEXT.STATUS,
      subject,
      message,
    };
  }

  submitHandler(event) {
    event.preventDefault();

    const content = this.getMessageText();
    const container = this.form;

    const popup = new Popup(container, content, 'form__popup');
    popup.open();
  }

  addHandlers() {
    this.form.addEventListener('submit', this.submitHandler.bind(this));
  }

  init() {
    this.form = document.querySelector('#feedback__form');
    this.subjectField = this.form.querySelector('#form__subject');
    this.messageField = this.form.querySelector('#form__message');

    this.addHandlers();
  }
}