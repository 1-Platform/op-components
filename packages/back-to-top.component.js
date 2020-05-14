class BackToTop extends HTMLElement {
    constructor() {
      super();
  
    const style = `
    button {
      padding: 2rem;
      position: fixed;
      right:0;
      background-color:blue;
      color: white;
      height: 40px;
      bottom: 0;
      opacity: 0;
    }
    `;
  
    const html = `
    <button id="goUp">Go up!</button>
    `;
  
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style> ${style} </style>
    ${html}
    `;
    this.btn = this.shadowRoot.querySelector("#goUp");
    const revealat = this.getAttribute("reveal-at") | 500;
    window.addEventListener("scroll", () => {
      if (window.scrollY > revealat) {
        this.btn.setAttribute("style", "opacity:1");
      }
      else{
        this.btn.setAttribute("style", "opacity:0");
      }
    });
    }
  
    up() {
      window.scrollTo(0, 0);
    }
  
    connectedCallback() {
      this.btn.addEventListener("click", this.up);
    }
  
    disconnectedCallback() {}
  }
  
  customElements.define("back-to-top", BackToTop);
  