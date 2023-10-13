import { inserirCorpoPrincipalDoFilme } from "./inserir_html.js";

export function criarPerfilDoFilme(elementoTitulo, elementoHTML, filme) {
    elementoTitulo.innerText = filme.title;

    inserirCorpoPrincipalDoFilme(elementoHTML, filme);
}

