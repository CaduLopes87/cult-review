import { apiUrl } from "./API.js";
import { obterDadosDaApi } from "./requisicoes.js";

const filmeCelula = document.getElementById('filme-container');


obterDadosDaApi(apiUrl).then(filme => {
    filmeCelula.innerHTML += `<div class="filme">${filme.title}</div>`
});

