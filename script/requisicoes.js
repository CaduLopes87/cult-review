import { obterURL } from "./API.js";

export async function obterFilmeDaAPI(criterio){

    //critério a ser utilizado para a resquisição: Id do filme ou status 
    const url = obterURL(criterio); 

    const response = await fetch(url);

    const data = await response.json();

    return data;
}
