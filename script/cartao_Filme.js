import { obterURLDoPoster } from "./API.js";

//O arquivo API.js contém as URLs com a chave de acesso

export function exibirCartaoDoFilme(elementoHTML, filme){

    const posterUrl = obterURLDoPoster(filme["poster_path"]);

    elementoHTML.innerHTML += `<a href="/perfil-filme.html?id=${filme.id}" class="acessar-filme" acessar-filme="${filme.id}">
    <article id="${filme.id}" class="filme">
        <img src="${posterUrl}" alt="${filme.title} poster">
        <p>${filme.title}</p>
    </article>
<a>`;
};