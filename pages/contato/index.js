export default () => {
    const container = document.createElement('section');
    container.setAttribute('class', 'formulario');
    container.setAttribute('id', 'formulario');

    const template = `
        <div class="interface">
            <h2 class="titulo">FALE <span>COMIGO.</span></h2>

            <form method="post" action="envia.php">
                <input type="text" name="nome" id="" placeholder="Seu nome completo:" required>
                <input type="text" name="email" id="" placeholder="Seu e-mail:" required>
                <input type="text" name="celular" id="" placeholder="Seu celular:">
                <textarea name="area" id="" placeholder="Sua mensagem" required></textarea>
                <div class="btn-enviar"><input type="submit" value="ENVIAR"></div>
            </form>
        </div>`;

    container.innerHTML = template;

    return container;
}