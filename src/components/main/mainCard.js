class MainComponent extends HTMLElement {
    constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML =`
    <link rel="stylesheet" href="/src/components/main/mainCard.css">    
    <main>
    </main>
    `;
    }
    connectedCallback() {
        const currentUrl = window.location.href;
        const main = this.shadowRoot.querySelector('main');
        switch(currentUrl) {
            case 'http://127.0.0.1:5500/index.html':
                main.innerHTML = `
                    <div class="card" id="card">
                        <btn-component action="change-page-pop"></btn-component>
                    </div>`;
                break;
            case 'http://127.0.0.1:5500/src/pages/pop/pop.html':
                main.innerHTML = `
                    <div class="card" id="card">
                        <h1>Pop List</h1>
                        <card-list-component></card-list-component>
                        </div>
                    </div>`;
                break;
        }
    }
}

customElements.define('main-component', MainComponent);