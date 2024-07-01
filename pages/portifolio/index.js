export default () => {

const container = document.createElement('section')

    container.setAttribute('class', 'portifolio')
    container.setAttribute('id', 'portifolio')

    const template = `<div class="interface">
            <h2 class="titulo">MEU <span>PORTIFÓLIO.</span></h2>
            <div class="flex">
                <div class="img-port" style="background-image: url(img/imagem.jpg);">
                    <div class="overlay">EM CONSTRUÇÃO</div>
                </div>
                <div class="img-port" style="background-image: url(img/imagem.jpg);">
                    <div class="overlay">EM CONSTRUÇÃO</div>
                </div>
                <div class="img-port" style="background-image: url(img/imagem.jpg);">
                    <div class="overlay">EM CONSTRUÇÃO</div>
                </div>
            </div>
        </div>`
    
    container.innerHTML = template
    return container
}