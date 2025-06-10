class MainComponent extends HTMLElement {
    constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML =`
    <link rel="stylesheet" href="../../components/main/mainCard.css">    
    <main>
    </main>
    `;
    }
    connectedCallback() {
        const currentPage = document.title.trim().toLowerCase();
        const main = this.shadowRoot.querySelector('main');
        console.log('document.title:', currentPage); // Log para debug
        if (currentPage.includes('lovefm') && !currentPage.includes('pop')) {
            main.innerHTML = `
                <div class="card" id="card">
                    <btn-component action="change-page-pop"></btn-component>
                </div>`;
        } else if (currentPage.includes('pop')) {
            main.innerHTML = `
                <div class="card" id="card">
                    <h1>Pop List</h1>
                    <card-list-component></card-list-component>
                </div>`;
        } else {
            main.innerHTML = `<p style='color:red'>Página não reconhecida: ${currentPage}</p>`;
        }
    }
}

customElements.define('main-component', MainComponent);