import { apiUrl } from "./API.js";
import { exibirFilmesComStatus } from "./pagina_principal.js";
import { obterFilmeDaAPI } from "./requisicoes.js";

const filmesContainer = document.getElementById('filme-container');

exibirFilmesComStatus('popular', filmesContainer); //status: popular ou upcoming