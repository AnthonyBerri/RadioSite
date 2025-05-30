class MainComponent extends HTMLElement {
    constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML =`
    <link rel="stylesheet" href="/src/components/main/mainCard.css">    
    <main>
        <div class="card" id="card">
        </div> 
    </main>
    `;
    }
    connectedCallback() {
        const carElement = this.shadowRoot.getElementById('card');
        carElement.innerHTML = `
            <div>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
            <div>BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB</div>
            <div>CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC</div>
        `;
    };
}

customElements.define('main-component', MainComponent);