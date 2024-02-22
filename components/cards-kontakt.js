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
            <h5>Echostar</h5>
            <p>Poznań, Osiedle Bolesława Chrobrego 26, pawilon nr. 11</p>
            <p>E-mail: biuro@echostar.pl</p>
            <p>Tel.: (61) 671 00 00</p>
        </div>
        <div class="card">
            <h5>VirtuaOperator</h5>
            <p>00-667 Warszawa,<br>Koszykowa 61B</p>
            <p>E-mail: biuro@virtuaoperator.pl</p>
            <p>Tel.: +48 22 10 22 222</p>
        </div>
        <div class="card">
            <h5>FiberX</h5>
            <p>04-902 Warszawa,<br>ul. Chryzantemy 3</p>
            <p>E-mail: biuro@fiberx.pl</p>
            <p>Tel.: +48 22 1022 000</p>
        </div>
        <div class="card">
            <h5>ServCom</h5>
            <p>62-240 Trzemeszno,<br>ul. Foluska 6</p>
            <p>E-mail: info@serv-net.pl</p>
            <p>Tel.: 61 669 90 00</p>
        </div>
    

    </div>
      `;
    }
  }
  
  customElements.define('cards-kontakt', CardsKontakt);