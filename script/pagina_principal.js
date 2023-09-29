import { obterURLDoPoster } from "./API.js";
import { obterFilmeDaAPI } from "./requisicoes.js";


export function obterFilmesComStatus(status, elementoHTML){
    obterFilmeDaAPI(status).then(catalogo => {
        catalogo.results.forEach((filme) => {
            exibirCartaoDoFilme(elementoHTML, filme)
        });
    })
}

function exibirCartaoDoFilme(elementoHTML, filme){

    const posterUrl = obterURLDoPoster(filme["poster_path"]);

    elementoHTML.innerHTML += `<a href="#${filme.id}" class="acessar-filme">
    <article class="filme">
        <img src="${posterUrl}" alt="${filme.title} poster">
        <p>${filme.title}</p>
    </article>
<a>`;
}