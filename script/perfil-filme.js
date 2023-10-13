import { obterFilmeDaAPI } from "./requisicoes.js";
import { criarPerfilDoFilme } from "./detalhes_FIlme.js";

const tituloDaPagina = document.querySelector('#perfil-filme');
const paginaFilme = document.querySelector('#pagina-filme');

const urlParams = new URLSearchParams(window.location.search);

const filmeID = urlParams.get('id');

obterFilmeDaAPI(filmeID).then(filme => {
    console.log(filme);
    criarPerfilDoFilme(tituloDaPagina, paginaFilme, filme);
});


