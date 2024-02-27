class CardsJakoscUslug extends HTMLElement {
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
            <img src="./assets/logo/fiberx-logo.png" alt="Logo serv-net" width="161" height="75">
            <h5>FiberX</h5>
            <a href="https://www.fiberx.pl/o-nas.html" class="button">Dostępna jest tutaj</a>
        </div>
        <div class="card">
            <img src="./assets/logo/echostar-logo.webp" alt="Logo echostar" width="161" height="45">
            <h5>Echostar</h5>
            <a href="https://www.echostar.pl/o-firmie" class="button">Dostępna jest tutaj</a>
        </div>
    </div>
    <center><h5>Servcom</h5></center>
    <table>
        <thead>
        <tr>
            <th>Wskaźnik</th>
            <th>Minimalna wartość</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Bezprzerwowy czas dostępności/świadczenia Usług</td>
            <td>od 90%</td>
        </tr>
        <tr>
            <td>Czas podłączenia Usług, w tym telekomunikacyjnych</td>
            <td>14 dni</td>
        </tr>
        <tr>
            <td>Czas podłączenia Usług, w tym telekomunikacyjnych w technologii XGS-PON</td>
            <td>30 dni</td>
        </tr>
        <tr>
            <td>Wskaźnik poprawności faktur z ostatnich 6 miesięcy w zakresie wysokości Opłaty Abonamentowe i Opłaty Powiązanej</td>
            <td>96%</td>
        </tr>
        </tbody>
        </table><br><br>
      `;
    }
  }
  
  customElements.define('cards-jakosc-uslug-component', CardsJakoscUslug);