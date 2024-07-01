import home from "./pages/home/index.js"
import especialidades from "./pages/especialidades/index.js"
import portifolio from "./pages/portifolio/index.js"
import sobre from "./pages/sobre/index.js"

const main = document.querySelector("#root");

const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = "";
        switch(window.location.hash){
            case " ":
                main.appendChild(home());
                break;

            case "#especialidades":
                main.appendChild(especialidades());
                break;
            
            case "#sobre":
                main.appendChild(sobre());
                break;
            
            case "#portifolio":
                main.appendChild(portifolio());
                break;            

            default:
                main.appendChild(home());
            
        }
    })
}

init();

window.addEventListener("load", () => {
    /*main.appendChild(home());
    init();*/

    main.innerHTML = "";
        switch(window.location.hash){
            case " ":
                main.appendChild(home());
                break;

            case "#especialidades":
                main.appendChild(especialidades());
                break;
            
            case "#sobre":
                main.appendChild(sobre());
                break;
            
            case "#portifolio":
                main.appendChild(portifolio());
                break;
                
            default:
                main.appendChild(home());
            
        }
})