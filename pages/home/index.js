export default () => {
    const container = document.createElement('section');
    container.setAttribute('class', 'topo-site');

    const template = `
        <div class="interface">
            <div class="flex">
                <div class="txt-topo-site">
                    <h1>TRANSFORMANDO IDÉIAS EM REALIDADE<span>.</span></h1>
                    <p>Criatividade e inovação andam lado a lado. Com uma combinação única de design impactante, funcionalidade intuitiva e otimização para resultados, estou pronto para criar a presença digital dos seus sonhos</p>
                </div>
                <div class="img-topo-site">
                    <img src="img/profile-pic (2).png" alt="Foto do autor">
                </div>
            </div>
        </div>`;
    
    container.innerHTML = template;

    return container;

}