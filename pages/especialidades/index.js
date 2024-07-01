export default () => {
    const container = document.createElement('section')
    container.setAttribute('class', 'especialidades')

    const template = `
        <div class="interface">
            <h2 class="titulo">MINHAS <span>ESPECIALIDADES.</span></h2>
            <div class="flex">
                <div id="website" class="especialidades-box">
                    <div class="topo-especialidades">
                        <i class="bi bi-code-square"></i>
                        <h3>Website</h3>
                    </div>
                    <p>Sites dinâmicos, focados a cativar os usuários através de uma interface , intuitiva, amigável e ágil.</p>
                    <div class="footer-especialidades">
                        <i class="bi bi-filetype-html"></i>
                        <i class="bi bi-filetype-css"></i>
                        <i class="bi bi-filetype-js"></i>
                    </div>
                </div>
                <div class="especialidades-box">
                    <div class="topo-especialidades">
                        <i class="bi bi-cart"></i>
                        <h3>Loja online</h3>
                    </div>
                    <p>Usando a metodologia de criação de sites dinamicos, junto a uma API e banco de dados ágeis possui uma usabilidade dinâmica e de fácil entendimento para os consumidores da empresa.</p>
                    <div class="footer-especialidades">
                        <i class="fa-brands fa-angular"></i>
                        <i class="fa-brands fa-node"></i>
                        <i class="bi bi-database-exclamation"></i>
                    </div>
                </div>
                <div class="especialidades-box">
                    <div class="topo-especialidades">
                        <i class="bi bi-gear-wide-connected"></i>
                        <h3>Arduino</h3>
                    </div>
                    <p>Alem de aprender a programar na linguagem c++, meu hobby é criar ferramentas que possam ser utilizadas no contesto de “A Internet das Coisas (Iot).</p>
                </div>
            </div>
        </div>`
    
    container.innerHTML = template

    return container
}