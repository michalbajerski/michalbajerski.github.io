class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
    <style>
        header{
            max-width: 1300px;
            margin: auto;
            padding: 16px 16px;
        }
        @media only screen and (max-width: 600px){
            header{
                text-align: center;
            }
        }
    </style>
    <header>
        <a href="index.html">
          <img src="./assets/logo/main-logo.webp" alt="Logo Virtual Operator" width="160" height="28">
        </a>
    </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);