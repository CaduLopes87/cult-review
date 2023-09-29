import { obterURL } from "./API.js";

export async function obterFilmeDaAPI(criterio){

    const url = obterURL(criterio);

    const response = await fetch(url);

    const data = await response.json();

    return data;
}
