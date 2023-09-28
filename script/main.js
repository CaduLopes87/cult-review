import apiUrl from "./API";

const filmeCelula = document.getElementById('filme-container');

async function obterDadosDaApi(url){
    const response = await fetch(url);

    // console.log(response);

    const data = await response.json()
    // console.log(data);

    return data;
}

// const filme = obterDadosDaApi(apiUrl);
obterDadosDaApi(apiUrl).then(filme => {
    filmeCelula.innerHTML += `<div class="filme">${filme.title}</div>`
});

