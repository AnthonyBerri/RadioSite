class MainComponent extends HTMLElement {
    constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML =`
    <link rel="stylesheet" href="src/components/main/mainCard.css">    
    <main>
    </main>
    `;
    }
    connectedCallback() {
        const currentPage = document.title;
        const main = this.shadowRoot.querySelector('main');
        switch(currentPage) {
            case 'LoveFM':
                main.innerHTML = `
                    <div class="card" id="card">
                        <btn-component action="change-page-pop"></btn-component>
                    </div>`;
                break;
            case 'LoveFM - Pop':
                main.innerHTML = `
                    <div class="card" id="card">
                        <h1>Pop List</h1>
                        <card-list-component></card-list-component>
                    </div>`;
                break;
        }
    }
}

customElements.define('main-component', MainComponent);