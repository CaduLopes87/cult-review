import { apiUrl } from "./API.js";
import { obterFilmesComStatus } from "./pagina_principal.js";
import { obterFilmeDaAPI } from "./requisicoes.js";

const filmesContainer = document.getElementById('filme-container');

obterFilmesComStatus('popular', filmesContainer);