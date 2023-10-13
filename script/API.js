const apiKey = process.env.API_KEY;

// const apiKey = a8ef96a8478ba03d3138ded107eb1def;

export const apiUrl = `https://api.themoviedb.org/3/movie/1008042?api_key=${apiKey}&language=pt-br`;

export function obterURL(param) {
    const novaURL = `https://api.themoviedb.org/3/movie/${param}?api_key=${apiKey}&language=pt-br`;
    return novaURL;
} 

export function obterURLDoPoster(param){
    const novaURLPoster = `https://image.tmdb.org/t/p/w500/${param}`
    return novaURLPoster;
}