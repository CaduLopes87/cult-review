import { obterURLDoPoster } from "./API.js";

export function inserirCorpoPrincipalDoFilme(elementoHTML, filme){

    const urlBackdrop = obterURLDoPoster(filme['backdrop_path']);

    
    const vote = filme['vote_average'].toFixed(1);
    const statusDoSite = filme.homepage === "" ? 'Indisponível' : filme.homepage;
    const siteDoFilme = statusDoSite === 'Indisponível' ? "" : statusDoSite;

    elementoHTML.innerHTML = `<section>
        <img class="backdrop" src="${urlBackdrop}" alt="plano de fundo do filme ${filme.title}">
    <section class="filme-dados">
        <div class="cabecalho-filme">
            <p class="titulo">${filme.title}</p>
            <p class="tagline">${filme.tagline}</p>
            <div class="votos">Nota: ${vote}/10</div>
        </div>
        <div class="descricao sinopse">
            <p>Sinopse:</p>
            <p>${filme.overview}</p>
        </div>
        <ul class="descricao detalhes" lista-detalhes>
            <p>Detalhes do filme:</p>
            <li> 
                site: <a href="${siteDoFilme}">${statusDoSite}</a>
            </li>
            <li>Perfil no IMDB:
                <a href="https://www.imdb.com/title/${filme['imdb_id']}/?ref_=fn_al_tt_3">Acesse</a>
            </li>
            <li>Bilheteria: $${filme.revenue}</li>
            <li>Idioma original: ${filme['original_language']}</li>
            <li>Título original: ${filme['original_title']}</li>
        <ul>
    </section>
</section>`;

inserirGeneros(filme);
inserirProdutoras(filme);
}

function inserirGeneros(filme){
    
    const listaDetalhes = document.querySelector('[lista-detalhes]');
    
    listaDetalhes.innerHTML += `
        <li>
            Gêneros:
            <ul lista-generos></ul>
        </li>`;

    const listaGeneros = document.querySelector('[lista-generos]');

    filme.genres.forEach(genero => {

        listaGeneros.innerHTML += `<li>${genero.name}</li>`
    })
}

function inserirProdutoras(filme){
    
    const listaDetalhes = document.querySelector('[lista-detalhes]');

    listaDetalhes.innerHTML += `
    <li>
        Produtoras:
        <ul lista-produtoras></ul> 
    <li>`;

    const listaProdutoras = document.querySelector('[lista-produtoras]');
    
    filme['production_companies'].forEach(produtora => {

        const urlLogoProdutora = obterURLDoPoster(produtora['logo_path']);

        listaProdutoras.innerHTML += `
        <li>
            <img src="${urlLogoProdutora}" alt="logo da ${produtora.name}">
        </li>`
    })
}