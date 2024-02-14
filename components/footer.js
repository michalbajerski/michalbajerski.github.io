class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <style>
        /* Footer */
        footer {
            background-color: #464646;
        }
        footer nav {
            max-width: 1300px;
            margin: auto;
            display: flex;
            flex-direction: row;
            gap: 16px;
            padding: 24px 24px;
        }
        footer nav ul {
            display: flex;
            flex-direction: column;
            width: 100%;
        }
        footer nav ul li {
            list-style: none;
            margin-bottom: 12px;
        }
        footer nav ul li a {
            color: #fff;
            text-decoration: none;
            font-size: 14px;
            line-height: 20px;
            font-weight: 400;
        }
        footer nav ul li:last-of-type {
            margin-bottom: none;
        }
        
        @media only screen and (max-width: 600px) {
            footer nav {
            flex-direction: column;
            gap: 0px;
            text-align: center;
            padding: 16px 16px;
            }
        }
      </style>
      <footer>
      <nav>
          <ul>
              <li><a href="#">Dla operatorów</a></li>
              <li><a href="#">Dokumentacja abonencka</a></li>
              <li><a href="#">Oferty promocyjne</a></li>
              <li><a href="#">Reklamacje</a></li>
          </ul>
          <ul>
              <li><a href="ochrona-danych-osobowych.html">Ochrona danych osobowych</a></li>
              <li><a href="#">Regulaminy</a></li>
              <li><a href="#">Inne</a></li>
              <li><a href="#">Informacje dla operatorów</a></li>
          </ul>
          <ul>
              <li><a href="#">Cookies</a></li>
              <li><a href="#">Regulaminy szczegółowe</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Ryzyka</a></li>
          </ul>
          <ul>
              <li><a href="#">Obowiązki informacyjne</a></li>
              <li><a href="#">Cenniki</a></li>
              <li><a href="#">Reklamacje informacje</a></li>
              <li><a href="udogodnienia-dla-niepelnosprawnych.html">Udogodnienia dla niepełnosprawnych</a></li>
          </ul>
      </nav>
  </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);