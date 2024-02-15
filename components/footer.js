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
              <li><a href="baza-dokumentow.html"><b>Baza dokumentów</b></a></li>
              <li><a href="#">Oferty promocyjne</a></li>
              <li><a href="#">Dokumentacja abonencka</a></li>
          </ul>
          <ul>
              <li><a href="ochrona-danych-osobowych.html"><b>Ochrona danych osobowych</b></a></li>
              <li><a href="cookies.html"><b>Cookies</b></a></li>
              <li><a href="#">Obowiązki informacyjne</a></li>
          </ul>
          <ul>
              <li><a href="#">Reklamacje informacje</a></li>
              <li><a href="udogodnienia-dla-niepelnosprawnych.html"><b>Udogodnienia dla niepełnosprawnych</b></a></li>
              <li><a href="#">Inne</a></li>
              <li><a href="kontakt.html"><b>Kontakt</b></a></li>
          </ul>
      </nav>
  </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);