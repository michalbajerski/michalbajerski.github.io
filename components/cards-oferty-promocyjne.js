class CardsOfertyPromocyjne extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
    <style>
        .cards{
            display: flex;
            flex-direction: row;
            gap: 16px;
            align-items: flex-end;
            max-width: 1300px;
            margin: auto;
            margin-top: 64px;
            margin-bottom: 64px;
        }
        .card{
            padding: 24px;
            text-align: center;
            width: 100%;
        }
        .card{
            img{
                max-width: 100%;
                height: auto;
            }
        }
        h5{
            font-size: 20px;
            line-height: 28px;
            color: #464646;
            font-weight: 400;
            margin: 12px 0px;
        }
        a.button{
            background-color: #A0CF42;
            padding: 12px 24px 12px 24px;
            border-radius: 100px;
            text-decoration: none;
            color: black;
            font-size: 16px;
            display: inline-block;
            font-weight: 400;
        }
        @media only screen and (max-width: 600px){
        .cards{
                flex-direction: column;
                margin-top: 32px;
                margin-bottom: 32px;
                .card{
                    padding: 16px 0px;
                }
        } 
        }
    </style>
    <div class="cards">
        <div class="card">
            <img src="./assets/logo/serv-net-logo.webp" alt="Logo serv-net" width="161" height="75">
            <h5>Baza dokumentów VLO<br>pod marką Servcom</h5>
            <a href="https://serv-net.pl/" class="button">Oferta dostępna jest tutaj</a>
        </div>
        <div class="card">
            <img src="./assets/logo/echostar-logo.webp" alt="Logo echostar" width="161" height="45">
            <h5>Baza dokumentów VLO<br>pod marką Echostar</h5>
            <a href="#" class="button">Brak</a>
        </div>
        <div class="card">
            <img src="./assets/logo/virtuaoperator-logo.webp" alt="Logo virtuaoperator" width="161" height="49">
            <h5>Baza dokumentów VLO<br>pod marką VO</h5>
            <a href="#" class="button">Nie prowadzimy sprzedaży</a>
        </div>
        <div class="card">
            <img src="./assets/logo/fiberx-logo.png" alt="Logo virtuaoperator" width="161" height="49">
            <h5>Baza dokumentów VLO<br>pod marką FiberX</h5>
            <a href="https://www.fiberx.pl/" class="button">Oferta dostępna jest tutaj</a>
        </div>
    </div>
      `;
    }
  }
  
  customElements.define('cards-oferty-promocyjne-component', CardsOfertyPromocyjne);