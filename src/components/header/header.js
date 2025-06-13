class HeaderComponent extends HTMLElement {
    constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML =`
        <link rel="stylesheet" href="../../components/header/header.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
        <header>
            <button class="menu-btn">☰ </button> 
        
            <p class="logo">Love.FM</p>
        
            <div class="login-btn">
                <a href="src/pages/login/login.html" style="color: inherit; font-size: 35px;">
                    <i class="bi bi-person-circle"></i>
                </a>
            </div>
    
            <div class="sidebar">
                <ul>               
                    <li><a href="../../pages/home/index.html"><i class="bi bi-house"></i> Home</a></li>
                    <li><a href="#"><i class="bi bi-star"></i> Favoritos</a></li>
                    <li><a href="#"><i class="bi bi-question-circle"></i> Sobre o projeto</a></li>

                    <h1>Estilos</h1>

                    <li><a href="../../pages/pop/pop.html">Pop</a></li>
                    <li><a href="../../pages/rock/rock.html">Rock</a></li>
                    <li><a href="../../pages/2000s/2000s.html">2000's</a></li>

                    <h1>Artistas</h1>

                    <li><a href="#">Billie Eilish</a></li>
                    <li><a href="#">Olivia Rodrigo</a></li>
                    <li><a href="#">Taylor Swift</a></li>
                </ul>
            </div> 
        </header>
    `;}
    connectedCallback() {
        const menuBtn = this.shadowRoot.querySelector('.menu-btn');
        const sidebar = this.shadowRoot.querySelector('.sidebar');

        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('show');
        });
    }
}

customElements.define('header-component', HeaderComponent);