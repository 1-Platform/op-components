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
 * Last modified  : 2021-03-04 21:38:14
 */

import { LitElement, html, property, customElement, internalProperty, query } from 'lit-element';
import style from './opc-feedback.scss';
import { repeat } from 'lit-html/directives/repeat.js';
import { defaultTemplate } from './defaultTemplate';
import { arrowBackIcon, bugIcon, chatboxIcon, documentIcon, openLinkIcon, chatBubblesIcon } from './assets';
@customElement('opc-feedback')
export class OpcFeedback extends LitElement {
  @property({ type: String, attribute: 'spa' }) spa = "/feedback";
  @property({ type: String, attribute: 'docs' }) docs = "/get-started";
  @property({ reflect: true }) theme = "red";
  @property({ type: Object }) template = defaultTemplate;
  @internalProperty()
  _openConfirmationModal = false;
  @internalProperty()
  _openFeedbackModal = false;
  @internalProperty()
  _openInitialModal = false;
  @internalProperty()
  _openBugModal = false;
  @internalProperty() protected _summary = '';
  @internalProperty() _experience = '';
  @internalProperty()
  _error = '';
  _path = window.location.pathname;

  @query('textarea') textarea: HTMLTextAreaElement;

  constructor() {
    super();
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
  }

  _updateTemplate() {
    this.template = { ...defaultTemplate, ...this.template }
    const urlPattern =  new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    if (!urlPattern.test(this.docs)) {
      console.warn(`${this.tagName.toLowerCase()} URL validation failed for docs`);
    }
    if (!urlPattern.test(this.spa)) {
      console.warn(`${this.tagName.toLowerCase()} URL validation failed for spa`);
    }
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
          experience: (this._experience) ? this._experience : null,
          error: (this._error) ? this._error : null,
          category: (this._error) ? 'BUG' : 'FEEDBACK',
          stackInfo: {
            "stack": navigator.appVersion,
            "path": ((this._path.length !== 1) && (this._path.substr(this._path.length-1, 1) === '/') || (this._path.substr(this._path.length-1, 1) === '#')) ? this._path.slice(0, -1) : this._path
            ,
          }
        }
      }
    }));
    this._resetForm();
  }

  toggle() {
    this._openInitialModal = !this._openInitialModal;
  }

  _setModalState(initialModalState, feedbackModalState, bugModalState, confirmationModalState) {
    this._openInitialModal=initialModalState;
    this._openFeedbackModal=feedbackModalState;
    this._openBugModal=bugModalState;
    this._openConfirmationModal=confirmationModalState;
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
    
    <!-- Bug Panel -->
    <dialog id="bug-dialog" class="op-feedback__panel pf-u-mr-0 pf-u-display-block" .open="${this._openBugModal}">
      <form class="bug-form" id="bugform">
        <div class="pf-u-display-flex">
          <img src="${arrowBackIcon}" width="14.25px" class="pf-u-font-size-lg" @click="${e => {
            this._setModalState(true, false, false, true);
            this._resetForm();
          }}"/>
          <header>
            <h3 class="pf-u-font-weight-normal pf-u-font-size-lg pf-u-text-align-center pf-u-m-xs">${this.template.errorTitle}
            </h3>
          </header>
        </div>
        ${repeat(this.template.errorList, (error) => html`
        <div
          class="pf-c-chip pf-m-draggable op-feedback__chip ${this._error === error.name ? 'op-feedback__chip__active' : ''}"
          @click="${e => this._setError(error.name)}" @keydown=${e => (e.key === 'Enter') ? this._setError(error.name) : ''}
          tabindex="0">
          <span class="pf-u-font-size-xs">${error.name}</span>
        </div>
        `)}
        <p class="op-feedback__subtitle pf-u-font-size-md pf-u-pt-md">${this.template.summary}</p>
        <textarea id="bugsummary" rows="3" name="bugsummary"
          @input="${(e: HTMLElementEventMap | any) => this._summary = e.target.value}"
          placeholder=${this.template.summaryPlaceholder} class="pf-c-form-control pf-m-resize-vertical"
          required></textarea>
          <p class="op-feedback__subtitle pf-u-font-size-xs">
          ${this.template.bugSubmissionNote}</p>
        <button class="pf-c-button pf-m-block ${this._error.length === 0 ? 'pf-u-display-none-on-sm' : ''}"
          type="button" @click="${e => {
        this._submitFeedback();
        this._setModalState(false, false, false, !this._openConfirmationModal);

      }}">Submit</button>
        <button id="submit-bug" class="pf-c-button pf-m-block ${this._error.length !== 0 ? 'pf-u-display-none-on-sm' : ''}"
          type="button" disabled>Submit</button>
      </form>
    </dialog>

    <!-- Feedback Panel -->
    <dialog id="feedback-dialog" class="op-feedback__panel pf-u-mr-0 pf-u-display-block" .open="${this._openFeedbackModal}">
      <form class="feedback-form" id="feedbackform">
        <div class="pf-u-display-flex">
          <img src="${arrowBackIcon}" width="14.25px" class="pf-u-font-size-lg" @click="${e => {
            this._setModalState(true, false, false, true);
            this._resetForm();
          }}"/>
          <header>
            <h3 class="pf-u-font-weight-normal pf-u-font-size-lg pf-u-text-align-center pf-u-m-0">${this.template.feedbackTitle}
            </h3>
          </header>
        </div>
        <p class="op-feedback__subtitle pf-u-text-align-center pf-u-font-size-sm pf-u-pt-md pf-u-pb-md">
          ${this.template.subtitle}</p>
        ${repeat(this.template.experienceList, (experience) => html`
        <div
          class="pf-c-chip pf-m-draggable op-feedback__chip ${this._experience === experience.name ? 'op-feedback__chip__active' : ''}"
          @click="${e => this._setExperience(experience.name)}" @keydown=${e => (e.key === 'Enter') ?
            this._setExperience(experience.name) : ''} tabindex="0">
          <span class="pf-c-chip__icon">
            <img src="${experience.assetUrl}" alt="${experience.name} icon" width="17px">
          </span>
          <span class="pf-u-font-size-xs">&nbsp;${experience.name}</span>
        </div>
        `)}
        <p class="op-feedback__subtitle pf-u-font-size-md pf-u-pt-md">${this.template.summary}</p>
        <textarea id="feedbacksummary" rows="3" name="feedbacksummary"
          @input="${(e: HTMLElementEventMap | any) => this._summary = e.target.value}"
          placeholder=${this.template.summaryPlaceholder} class="pf-c-form-control pf-m-resize-vertical"
          required></textarea>
        <button class="pf-c-button pf-m-block ${this._experience.length === 0 ? 'pf-u-display-none-on-sm' : ''}"
          type="button" @click="${e => {
        this._submitFeedback();
        this._setModalState(false, false,false, !this._openConfirmationModal);
      }}">Submit</button>
        <button id="submit-feedback" class="pf-c-button pf-m-block ${this._experience.length !== 0 ? 'pf-u-display-none-on-sm' : ''}"
          type="button" disabled>Submit</button>
      </form>
    </dialog>
    
    <!-- Confirmation Modal -->
    <dialog id="confirmation-dialog" class="op-feedback__panel pf-u-mr-0" .open="${this._openConfirmationModal}">
      <h2 class="pf-u-text-align-center">${this.template.confirmationTitle}</h2>
      <p class="op-feedback__subtitle pf-u-text-align-center pf-u-font-size-xs pf-u-pb-md">
        ${this.template.confirmationSubTitle}</p>
      <hr class="pf-c-divider" />
      <a href="${this.spa}" target="_blank">
        <p class="pf-u-text-align-center pf-u-p-xs">${this.template.spaRedirectTitle}</p>
      </a>
      <hr class="pf-c-divider" />
      <p class="op-feedback__subtitle pf-u-text-align-center pf-u-p-xs" @click="${e => this._openConfirmationModal = false}"
        @keydown=${e => (e.key === 'Enter') ? this._openConfirmationModal = false : ''} tabindex="0">
        close
      </p>
    </dialog>
    
    <!-- Initial Modal -->
    <dialog id="initial-dialog" class="op-feedback__panel pf-u-mr-0 pf-u-p-0" .open="${this._openInitialModal}">
      <header class="op-feedback__header">
        <h3 class="pf-u-font-weight-normal pf-u-font-size-md pf-u-m-0">${this.template.dialogTitle}</h3>
      </header>
      <main id="op-feedback__panel-body">
      <ul class="op-feedback__options pf-u-m-0 pf-u-p-0">
        <li>
          <button type="button" autofocus="true" data-feedback-type="bug" class="op-feedback__option-item pf-u-flex-direction-row pf-u-align-items-center pf-u-w-100 pf-u-display-flex" @click="${e => {
            this.toggle();
            this._setModalState(false, false, true, false);
          }}">
            <img src="${bugIcon}" width="16px" class="op-feedback__option-icon pf-m-text-align-left"/>&nbsp;
            ${this.template.bugReportTitle}
          </button>
        </li>
        <li>
          <button type="button" data-feedback-type="feedback" class="op-feedback__option-item pf-u-flex-direction-row pf-u-align-items-center pf-u-w-100 pf-u-display-flex" @click="${e => {
            this.toggle();
            this._setModalState(false, true, false, false);
          }}">
            <img src="${chatboxIcon}" width="16px" class="op-feedback__option-icon pf-m-text-align-left"/>&nbsp;
            ${this.template.feedbackReportTitle}
          </button>
        </li>
        <li>
          <a href="${this.docs}" data-feedback-type="feedback-list" class="op-feedback__option-item pf-u-flex-direction-row pf-u-align-items-center pf-u-w-100 pf-u-display-flex">
            <img src="${documentIcon}" width="16px" class="op-feedback__option-icon pf-m-text-align-left"/>&nbsp;
            ${this.template.documentationTitle}
            <img src="${openLinkIcon}" width="16px" class="op-feedback__icon-secondary pf-u-ml-xs"/>
          </a>
        </li>
        <li>
          <a href="${this.spa}" data-feedback-type="feedback-list" class="op-feedback__option-item pf-u-flex-direction-row pf-u-align-items-center pf-u-w-100 pf-u-display-flex">
            <img src="${chatBubblesIcon}" width="16px" class="op-feedback__option-icon pf-m-text-align-left"/>&nbsp;
            ${this.template.spaRedirectTitle}
            <img src="${openLinkIcon}" width="16px" class="op-feedback__icon-secondary pf-u-ml-xs"/>
          </a>
        </li>
      </ul>
      </main>
    </dialog>
    
    <!-- Feedback Button -->
    <button id="feedback-popup" type="button" class="op-feedback__button pf-u-align-items-center pf-u-flex-direction-row pf-u-display-flex" @click="${e => {
        this.toggle();
        this._setModalState(this._openInitialModal, false, false, false);
      }}">
      <ion-icon name="${(this._openFeedbackModal || this._openConfirmationModal || this._openInitialModal || this._openBugModal) ? 'ellipsis-horizontal-outline' : 'chatbox-ellipses'}"
        class="pf-u-font-size-xl pf-u-mr-xs">
      </ion-icon>
      ${this.template.feedbackFAB}
    </button>
    `;
  }
}
