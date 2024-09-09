function pesquisar() {
    let section = document.querySelector("section#resultados-pesquisa")
    let campoPesquisa = document.querySelector("input#campo-pesquisa")

    let resultado = "" // já foi uma variável indefinida
    let titulo = ""
    let descricao = ""

    let campoPesquisaFormatted = campoPesquisa.value.toLowerCase()

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()

        if (titulo.includes(campoPesquisaFormatted) || descricao.includes(campoPesquisaFormatted)) {
            resultado += `
        <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <img src="${dado.imagem}" alt="Uma foto de ${dado.titulo}">
            <a href="${dado.link}" target="_blank">Mais informações sobre a obra da personagem </a>
        </div>
    `
        }
    }

    if (campoPesquisa.value == "") {
        resultado = "<p>Você não pesquisou nada, bocó!</p>"
    }

    if (resultado == "") { // Antigamente eu estava verificando se a variável era indefinida, mas tinha algumas garotas que eu peguei da mesma obra, então as vezes elas citavam os mesmos nomes na descrição ou no título. Eu troquei para verificar uma string vazia.
        resultado = "<p>Esta personagem não existe, ou não consta na minha base de dados super avançada de última geração!</p>"
    }
    
    section.innerHTML = resultado
}