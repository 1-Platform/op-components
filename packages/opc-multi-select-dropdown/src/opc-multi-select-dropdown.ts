import { LitElement, html, property, customElement } from 'lit-element';
import style from './opc-multi-select-dropdown.scss';
import { repeat } from "lit-html/directives/repeat.js";

@customElement('opc-multi-select-dropdown')
export class MultiSelectDropdown extends LitElement {

  // Property Declarations
  @property({ reflect: true })
  filtername

  @property({ type: Array })
  dropdownlist = [];

  @property({ type: Array })
  activelist = [];

  @property({ type: String }) 
  text = "";

  
  @property({ attribute: 'is-searchable', type: String }) 
  isSearchable = "false";
  
  

  search(e) {
    const val = e.srcElement.value;
    this.text = val;
  }

  static get styles() {
    return [style];
  }

  constructor() {
    super();
  }

  get opcMultiSelectDropDownList() {
    return this.dropdownlist;
  }

  set opcMultiSelectDropDownList(dropdownlist) {
    if (!dropdownlist.length) {
      console.warn(`${this.tagName.toLowerCase()}: Array of "dropdownlist" must be provided. You can do so by using opcMultiSelectDropDownList setter function`);
    } else {
      this.dropdownlist = dropdownlist;
    }
  }

  get searchable() {
    return this.isSearchable==="true" ? 
    html`<input type="search" @keyup="${this.search}" @search="${this.search}"  id="searchinput" placeholder="search" /></label>`
    : html``;
  }

  get dropdownToggle() {
    return 
  }

  toggleCheck(e) {
    if(e.target.checked && this.activelist.indexOf(e.target.id) == -1){
      this.activelist.push(e.target.id);
    }
    if(!e.target.checked && this.activelist.indexOf(e.target.id) !== -1){
      let  index = this.activelist.indexOf(e.target.id);
      this.activelist.splice(index, 1);
    }
    console.log(this.activelist);
    let dropdownlistEvent = new CustomEvent('opc-dropdown-list:check', {
      detail: {
        message: 'opc-dropdown-list checked/unchecked.',
        data: this.activelist
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(dropdownlistEvent);
    }

  render() {
    return html`
      <style>
        .show {display: block;}
        .hide {display: none;}
      </style>
      <link rel="stylesheet" href="https://unpkg.com/@patternfly/patternfly/patternfly.css" crossorigin="anonymous">
      <span class="pf-c-select__toggle-text"> Filter by ${this.filtername}</span>
      <div class="pf-c-select__menu ">
        <!-- <button @click="${()=>{this.dropdownToggle}}" class="btn btn-default dropdown-toggle" type="button"> Dropdown </button> -->
        <input type="checkbox" id="toggle" hidden>
        <label class="btn btn-default dropdown-toggle" for="toggle">Toggle Dropdown</label>
        <div class="pf-c-select__menu-group toogle-dropdown">
        ${this.searchable}
          <fieldset id="dropdown" class="pf-c-select__menu-fieldset" aria-labelledby="select-checkbox-expanded-selected-group-status">
            <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-selected-running">
              ${repeat(this.dropdownlist, (listitem) => {
                if (
                  listitem.toLowerCase().indexOf(this.text.toLowerCase()) > -1
                ) {
                  return html`
                    <input @change="${this.toggleCheck}" class="pf-c-check__input" type="checkbox"  id="${listitem}" name="${listitem}" />
                    <span class="pf-c-check__label">${listitem}</span>
                    `;
                } else {
                  return html`<li style="display: none;">${listitem}</li>`;
                }
              })}
      

            </label>
          </fieldset>
          </div>
      </div>

    `;
  }
}