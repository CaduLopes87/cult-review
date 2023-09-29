import { obterURLDoPoster } from "./API.js";
import { obterFilmeDaAPI } from "./requisicoes.js";

//O arquivo API.js contém as URLs com a chave de acesso

export function exibirFilmesComStatus(status, elementoHTML){

    //Status: Popular ou upcoming (popular ou estreia em breve)

    obterFilmeDaAPI(status).then(catalogo => {

        //A função obterFilmeDaAPI retorna um objeto com uma coleção de filmes na chave "results"
        catalogo.results.forEach((filme) => {
            exibirCartaoDoFilme(elementoHTML, filme)
        });
    })
}

function exibirCartaoDoFilme(elementoHTML, filme){

    const posterUrl = obterURLDoPoster(filme["poster_path"]);

    elementoHTML.innerHTML += `<a href class="acessar-filme">
    <article class="filme">
        <img src="${posterUrl}" alt="${filme.title} poster">
        <p>${filme.title}</p>
    </article>
<a>`;
}