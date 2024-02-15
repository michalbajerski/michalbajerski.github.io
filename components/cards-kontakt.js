class CardsKontakt extends HTMLElement {
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
        p{
            color: #464646;
            font-size: 16px;
            font-weight: 400;
            text-align: center;
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
            <h5>Dane siedziby</h5>
            <p>80-330 Gdańsk, Pilotów 19</p>
        </div>
        <div class="card">
            <h5>Adres e-mail</h5>
            <p>adresmailowy@gmail.com</p>
        </div>
        <div class="card">
            <h5>Numer telefonu</h5>
            <p>+48 123 123 123</p>
        </div>
    </div>
      `;
    }
  }
  
  customElements.define('cards-kontakt', CardsKontakt);