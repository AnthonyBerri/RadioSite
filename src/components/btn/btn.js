class BtnComponent extends HTMLElement {
    constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML =`
        <link rel="stylesheet" href="../components/header/header.css">
        <header>
            <button class="the-btn">☰ </button> 
        
            <p class="logo">Love.FM</p>
        
            <div class="login-btn">
                <a href="/pages/login/login.html" style="color: inherit; font-size: 35px;">
                    <i class="bi bi-person-circle"></i>
                </a>
            </div>
    
            <div class="sidebar">
                <ul>               
                    <li><a href="/pages/home/index.html">Home</a></li>
                    <li><a href="/pages/home/index.html">Favoritos</a></li>
                    <li><a href="#">Quem Somos?</a></li>

                    <h1>Marcas</h1>

                    <li><a href="#">Audi</a></li>
                    <li><a href="#">BMW</a></li>
                    <li><a href="#">Ferrari</a></li>
                    <li><a href="#">Lamborghini</a></li>
                    <li><a href="#">Mercedes</a></li>
                    <li><a href="#">Porsche</a></li>
                </ul>
            </div> 
        </header>
    `;}
    connectedCallback() {
        const menuBtn = this.shadowRoot.querySelector('.the-btn');

        menuBtn.addEventListener('click', () => {
            const btnLink = this.shadowRoot.getElementById('btn-link');
            btnLink.innerHTML = `
                <a></a>
            `
        });
    }
}

customElements.define('btn-component', BtnComponent);