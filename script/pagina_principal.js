import { obterFilmeDaAPI } from "./requisicoes.js";
import { exibirCartaoDoFilme } from "./cartao_Filme.js";

export function exibirFilmesComStatus(status, elementoHTML){

    //Status: Popular ou upcoming (popular ou estreia em breve)

    obterFilmeDaAPI(status).then(catalogo => {

        //A função obterFilmeDaAPI retorna um objeto com uma coleção de filmes na chave "results"
        catalogo.results.forEach((filme) => {
            exibirCartaoDoFilme(elementoHTML, filme);
        });
    })
}