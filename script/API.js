const api_key = process.env.api_key;

export const apiUrl = `https://api.themoviedb.org/3/movie/1008042?api_key=${api_key}&language=pt-br`;

export function obterURL(param) {
    const novaURL = `https://api.themoviedb.org/3/movie/${param}?api_key=${api_key}&language=pt-br`;
    return novaURL;
} 

export function obterURLDoPoster(param){
    const novaURLPoster = `https://image.tmdb.org/t/p/w500/${param}`
    return novaURLPoster;
}