/**
 * Copyright (c) 2021 Red Hat One Platform
 *
 * MIT
 *
 * opc-feedback.ts enables the user to collect the feedback from the user
 *
 * @summary opc-feedback.ts will set the properties 
 * @author Rigin Oommen
 *
 * Created at     : 2021-01-18 14:53:24 
 * Last modified  : 2021-02-11 12:35:31
 */

import { LitElement, html, property, customElement, internalProperty, query } from 'lit-element';
import style from './opc-feedback.scss';
import { repeat } from 'lit-html/directives/repeat.js';
import { defaultTemplate } from './defaultTemplate';
@customElement('opc-feedback')
export class OpcFeedback extends LitElement {
  @property({ type: String, attribute: 'url' }) url;
  @property({ reflect: true }) theme;
  @property({ type: Object }) template = defaultTemplate;
  @internalProperty()
  _openConfirmationModal = false;
  @internalProperty()
  _openFeedbackModal = false;
  @internalProperty() protected _summary = '';
  @internalProperty() _experience = '';
  @internalProperty()
  _error = '';
  _errorList = [];

  @query('textarea') textarea: HTMLTextAreaElement;

  constructor() {
    super();
    this.theme = "red";
    this.url = "/feedback";
  }

  static get styles() {
    return [style];
  }

  _resetForm() {
    this._summary = '';
    this._experience = '';
    this._error = '';
    this.textarea.value = '';
  }

  _setExperience(selectedExperience) {
    this._experience = selectedExperience;
    this._errorList = this.template.experienceList.filter(experience => experience.name === this._experience)[0].errorList;
  }

  _updateTemplate() {
    this.template = { ...defaultTemplate, ...this.template }
  }

  _setError(selectedError) {
    this._error = selectedError;
  }

  _submitFeedback() {
    this.dispatchEvent(new CustomEvent('opc-feedback:submit', {
      detail: {
        message: this.template.confirmationEventMessage,
        data: {
          summary: this._summary,
          experience: this._experience,
          stackInfo: {
            "stack": navigator.appVersion,
            "path": window.location.pathname,
            "error": (this._error) ? `${this._error}` : ''
          }
        }
      }
    }));
    this._resetForm();
    this._errorList = [];
  }

  toggle() {
    this._openFeedbackModal = !this._openFeedbackModal;
  }

  set feedbackTemplate(template) {
    if (!template) {
      console.warn(`${this.tagName.toLowerCase()}:Object "template" must be provided. You can do so by using feedbackTemplate setter function`);
    } else {
      this.template = { ...defaultTemplate, ...template }
    }
  }
  
  get feedbackTemplate() {
    return this.template;
  }

  render() {
    this._updateTemplate();
    return html`
    <link type="text/css" rel="stylesheet" href="https://unpkg.com/@patternfly/patternfly/patternfly.css"
      crossorigin="anonymous"/>
    <link type="text/css" rel="stylesheet" href="https://unpkg.com/@patternfly/patternfly/patternfly-addons.css"
      crossorigin="anonymous"/>

    <!-- Feedback Panel -->
    <dialog id="data-dialog" class="op-feedback__panel" .open="${this._openFeedbackModal}">
      <form class="feedback-form" id="form">
        <header>
          <h3 class="pf-u-font-weight-normal pf-u-font-size-lg pf-u-text-align-center pf-u-m-0">${this.template.title}
          </h3>
        </header>
        <p class="op-feedback__subtitle pf-u-text-align-center pf-u-font-size-sm pf-u-pt-md pf-u-pb-md">
          ${this.template.subtitle}</p>
        ${repeat(this.template.experienceList, (experience) => html`
        <div
          class="pf-c-chip pf-m-draggable op-feedback__chip ${this._experience === experience.name ? 'op-feedback__chip__active' : ''}"
          @click="${e => this._setExperience(experience.name)}" @keydown=${e => (e.key === 'Enter') ?
            this._setExperience(experience.name) : ''} tabindex="0">
          <span class="pf-c-chip__icon">
            <img src="${experience.assetUrl}" alt="${experience.name} icon" width="20px">
          </span>
          <span class="pf-c-chip__text">${experience.name}</span>
        </div>
        `)}
        <hr class="pf-c-divider pf-u-pt-md pf-u-pb-md ${this._errorList.length === 0 ? 'pf-u-display-none-on-sm' : ''}" />
        <p class="op-feedback__subtitle pf-u-font-size-md ${this._errorList.length === 0 ? 'pf-u-display-none-on-sm' : ''}">
          ${this.template.errorTitle}</p>
        ${repeat(this._errorList, (error) => html`
        <div
          class="pf-c-chip pf-m-draggable op-feedback__chip ${this._errorList.length === 0 ? 'pf-u-display-none-on-sm' : ''} ${this._error === error.name ? 'op-feedback__chip__active' : ''}"
          @click="${e => this._setError(error.name)}" @keydown=${e => (e.key === 'Enter') ? this._setError(error.name) : ''}
          tabindex="0">
          <span class="pf-c-chip__text">${error.name}</span>
        </div>
        `)}
        <p class="op-feedback__subtitle pf-u-font-size-md pf-u-pt-md">${this.template.summary}</p>
        <textarea id="summary" rows="3" name="summary"
          @input="${(e: HTMLElementEventMap | any) => this._summary = e.target.value}"
          placeholder=${this.template.summaryPlaceholder} class="pf-c-form-control pf-m-resize-vertical"
          required></textarea>
        <button class="pf-c-button pf-m-block ${this._experience.length === 0 ? 'pf-u-display-none-on-sm' : ''}"
          type="button" @click="${e => {
        this._submitFeedback();
        this.toggle();
        this._openConfirmationModal = !this._openConfirmationModal;
      }}">Submit</button>
        <button id="submit-feedback" class="pf-c-button pf-m-block ${this._experience.length !== 0 ? 'pf-u-display-none-on-sm' : ''}"
          type="button" disabled>Submit</button>
      </form>
    </dialog>

    <!-- Confirmation Modal -->
    <dialog id="confirmation-dialog" class="op-feedback__panel" .open="${this._openConfirmationModal}">
      <h2 class="pf-u-text-align-center">${this.template.confirmationTitle}</h2>
      <p class="op-feedback__subtitle pf-u-text-align-center pf-u-font-size-xs pf-u-pb-md">
        ${this.template.confirmationSubTitle}</p>
      <hr class="pf-c-divider" />
      <a href="${this.url}" target="_blank">
        <p class="pf-u-text-align-center pf-u-p-xs">View Feedback</p>
      </a>
      <hr class="pf-c-divider" />
      <p class="op-feedback__subtitle pf-u-text-align-center pf-u-p-xs" @click="${e => this._openConfirmationModal = false}"
        @keydown=${e => (e.key === 'Enter') ? this._openConfirmationModal = false : ''} tabindex="0">
        close
      </p>
    </dialog>
    
    <!-- Feedback Button -->
    <button id="feedback-popup" type="button" class="op-feedback__button" @click="${e => {
        this.toggle();
        this._openConfirmationModal = false;
      }}">
      <ion-icon
        name="${(this._openFeedbackModal || this._openConfirmationModal) ? 'ellipsis-horizontal-outline' : 'chatbox-ellipses'}"
        class="pf-u-font-size-xl pf-u-mr-xs"></ion-icon>
      Feedback
    </button>
    `;
  }
}
