# garotas-de-anime-2 #

### Eu gostei tanto desse projeto, que eu decidi fazer uma segunda versão! ###
Dessa vez, os dados ficam armazenados direto no servidor! Além disso, o 

## `index.html` ##

Cria primeiro uma base para o html, contendo:
* *header*
* *main*
* *footer*

## `style.css` ##

* *Eu importo primeiro uma fonte do google fonts*
* *Estilizo o body da página*
* *Estilizo o h1 da página*
* *Estilizo a section da página*
* *Estilizo a section input da página*
* *Estilizo a section button da página*
* *Estilizo o footer da página*
* *Para um site mais responsivo, eu adiciono um suporte para telas menores, pegando todos estes elementos e alterando algumas linhas, utilizando o @media*

## `dados.json` ##
É um arquivo.json, seu valor são tables do tipo dictionary que guardam informações sobre as meninas, sendo elas:
* *título (nome)*
* *descrição*
* *src de uma imagem*
* *link*

**Ela se parece com isto:**
| titulo | descricao | imagem | link |
|:------:|:---------:|:------:|:----:|
| "Alya" | "Alya, de Ayla somethimes hides her feelings in russian, é uma garota misteriosa que esconde seus sentimentos por trás de uma fachada fria. Sua personalidade complexa e seus diálogos em russo a tornam uma personagem intrigante." | "img/Alya.png" | "https://en.wikipedia.org/wiki/Alya_Sometimes_Hides_Her_Feelings_in_Russian"

**Nota:** O alt (descrição da imagem caso não carregue) é uma string chamada "Uma foto de" que é juntada com o título da garota.
exemplo: "Uma foto de Alya" ou sendo mais preciso " alt='Uma foto de ${dado.titulo}' "

## `app.js` ##
Há duas funções no script, ambas são semelhantes. 

### `function getData(clientInput)` ###
Pesquisa os dados na minha super database e retorna-os!

### `function browse()` ###
Apenas chama `let resultado = function getData(clientInput)` e mostra o resultado da pesquisa no HTML.
