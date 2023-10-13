require('dotenv').config();

const apiKey = process.env.API_KEY;

export const apiUrl = `https://api.themoviedb.org/3/movie/1008042?apiKey=${apiKey}&language=pt-br`;

export function obterURL(param) {
    const novaURL = `https://api.themoviedb.org/3/movie/${param}?apiKey=${apiKey}&language=pt-br`;
    return novaURL;
} 

export function obterURLDoPoster(param){
    const novaURLPoster = `https://image.tmdb.org/t/p/w500/${param}`
    return novaURLPoster;
}