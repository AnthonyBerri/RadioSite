class BtnComponent extends HTMLElement {
    constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML =`
        <link rel="stylesheet" href="src/components/btn/btn.css">
        <div class="btn-container">
            <button class="the-btn">
                <a href="#" id="btn-link"></a>
            </button>
        </div>
    `;}
    connectedCallback() {
        const menuBtn = this.shadowRoot.querySelector('.the-btn');
        const action = this.getAttribute('action');
        switch(action) {
            case 'change-page-pop':
                menuBtn.textContent = "Pop List";
                menuBtn.addEventListener('click', () => {
                    window.location.href = 'src/pages/pop/pop.html';
                });
                break;
            case 'logout':
                // Exemplo: fazer logout
                alert('Logout!');
                break;
            case 'favoritar':
                // Exemplo: favoritar item
                alert('Favoritado!');
                break;
            default:
                // Ação padrão
                alert('Ação padrão!');
        }
    }
}

customElements.define('btn-component', BtnComponent);