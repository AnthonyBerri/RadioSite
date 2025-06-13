class CardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const shadow = this.shadowRoot;
        shadow.innerHTML =`
        <link rel="stylesheet" href="../../components/card-list/cardList.css">    
        <div class="card-list">
        </div>
    `;
    }

    connectedCallback() {
        const url = window.location.href;

        let data = { pop: [], rock: [] };

        fetch('../../components/card-list/data.json')
            .then(response => response.json())
            .then(jsonData => {
                data = jsonData;

                let page = '';
                if (url.includes('pop')) page = 'pop';
                if (url.includes('rock')) page = 'rock';

                const cards = data[page].map(item => `
                    <div class="card-item">
                        <img src="${item.img}" alt="${item.name}">
                        <h2>${item.name}</h2>
                        <btn-component></btn-component>
                    </div>
                `).join('');
                this.shadowRoot.innerHTML = `
                    <link rel="stylesheet" href="../../components/card-list/cardList.css">
                    <div class="card-list">
                        ${cards}
                    </div>
                `;
            })
            .catch(error => {
                this.shadowRoot.innerHTML = `<p>Erro ao carregar dados.</p>`;
            });
    }
}

customElements.define('card-list-component', CardComponent);