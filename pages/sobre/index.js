export default () => {
    const container = document.createElement('section');

    container.setAttribute('class', 'sobre');
    container.setAttribute('id', 'sobre');

    const template = `
        <div class="interface">
            <div class="flex">
                <div class="img-sobre">
                    <img src="img/foto-sobre-png.png" alt="">
                </div>
                <div class="txt-sobre">
                    <h2>MUITO PRAZER, <span>SOU WALTER LOPES DE SOUZA.</span></h2>
                    <P>Cursando tecnólogo em Analise e desenvolvimento de sistemas, desenvolvedor fullstack, gosto de desafios e por esse motivo optei por aprender todas as nuances do front-end e do back-end.</P>
                    <p>Acredito que todo desenvolvedor deva conhecer, pelo menos, os fundamentos de cada área em detrimento do setor escolhido, seja, front, back, machine learning e etc.</p>
                </div>
                
            </div>
        </div>`;
    
    container.innerHTML = template;

    return container;
}