/*1) Explique, com suas palavras, o que é um banco de dados NoSQL. Compare-o com um banco de dados relacional, destacando pelo menos três diferenças principais.
R: Podem ser também conhecidos como banco de dados “não relacionais”, eles processam grandes volumes de dados não estruturados e em constante mudança. Três principais diferença são:
O banco de dados relacional utiliza um modelo de tabela relacional, enquanto o NoSQL utiliza um modelo de documento, chave-valor ou gráfico.
Em um Banco de Dados NoSQL, você pode adicionar novos dados sem ter que pré-definido no esquema do banco de dados
 Os bancos de dados NoSQL são mais flexíveis e escaláveis.


2)O que são collections no MongoDB? Como elas se comparam a tabelas em bancos de dados relacionais?
R: No MongoDB, em vez de tabelas, os dados são armazenados em collections, ou seja, em  um agrupamento de documentos, que contêm um ou mais documentos BSON. 
Esses documentos são equivalentes a registros ou linhas em uma tabela de banco de dados relacional. Cada documento possui um ou mais campos, que funcionam 
de forma similar às colunas em uma tabela relacional.


3)Qual a função do comando `insertOne`? Em quais situações você o utilizaria?
R: O comando ‘insertOne’ é utilizado para inserir um único documento em uma collection no MongoDB. 
Ele é ideal para situações em que você deseja adicionar um registro de forma controlada e isolada, garantindo que, 
em caso de erro, apenas esse documento específico seja afetado, preservando a integridade dos demais dados. 
 Esse comando é útil quando não há a necessidade de inserir um grande número de dados simultaneamente, ou quando é importante que a inserção 
 seja tratada de forma atomizada e individual


4)Diferencie o comando `insertOne` de `insertMany`. Quando você deveria optar por usar um ou outro?
R: O comando insertOne é utilizado para inserir um único documento em uma collection, enquanto o insertMany é usado para inserir vários documentos de uma vez. O insertOne deve ser usado quando você precisa adicionar um único registro de forma controlada, como ao cadastrar um novo item ou usuário, já o insertMany é mais eficiente quando você precisa inserir múltiplos registros ao mesmo tempo, como em operações de carga em massa ou ao importar dados


5)O que o comando `find` faz? Dê exemplos de buscas possíveis com este comando.
R: O comando find no MongoDB é usado para consultar documentos em uma collection. Ele retorna todos os documentos que correspondem aos critérios de busca especificados
Exemplo: db.produtos.find({ nome: "Camiseta" });
Esse comando retorna todos os produtos com o nome "Camiseta".


6) Imagine que você está criando um sistema de biblioteca online. Quais informações você armazenaria em uma collection de livros? Descreva pelo menos 5 campos que seriam necessários para representar um livro no MongoDB.
R: Titulo(string), Autor(string), Ano de Publicação (number), Gênero (string), Preço(number)


7)Como você armazenaria os dados de empréstimos de livros? Descreva um exemplo de document que poderia representar um empréstimo, incluindo referências ao usuário e ao livro.
R: Para isso será necessário três collections sendo elas “Biblioteca” ”Usuário” ”Empréstimo”, na collection empréstimo cada documento representaria um empréstimo individual, contendo informações tanto do usuário quanto da biblioteca 
Estrutura das Collections
Biblioteca: Armazena informações sobre os livros disponíveis.
Usuário: Armazena informações sobre os usuários que pegam livros emprestados.
Empréstimo: Cada documento nesta coleção representará um empréstimo individual e conterá referências tanto ao Usuário quanto ao Biblioteca (livro)

{ 
"_id": "64c4e5d1b8f9c60123d7890a", 
"usuario_id": "64b8e1d2a6f7f12345d6789b", 
"biblioteca_id": "64c4e4d9c0b7a12345c5678f", 
"data_emprestimo": "2024-10-15T10:30:00Z", 
"data_devolucao_prevista": "2024-11-15T10:30:00Z", 
"data_devolução": null, 
"status": "ativo", 
"num_renovação": 1
 }

*/

use("bibliotecadb")
db.dropDatabase("bibliotecadb")
use("bibliotecadb")

db.createCollection("biblioteca");

//Usando o insetOne
db.biblioteca.insertOne({
    titulo:"O Senhor dos Anéis",
    autor:"J.R.R. Tolkien",
    ano_publicacao: 1954,
    genero: "Fantasia",
    disponivel: true
})

//Inserir 4 trabalhos com insertMany
db.biblioteca.insertMany([
    {
        titulo: "1984",
        autor: "George Orwell",
        ano_publicacao: 1949,
        genero: "Distopia",
        disponivel: true
   },

   {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    ano_publicacao: 1943,
    genero: "Infantil",
    disponivel: false
   }
   
])
//Consultas com `find`:

//Faça uma busca para encontrar todos os livros disponíveis na biblioteca.
db.biblioteca.find({ disponivel: true }).pretty();

//Realize uma consulta para encontrar os livros publicados antes do ano 1950.
db.biblioteca.find({ ano_publicacao: { $lt: 1950 } }).pretty();

//Encontre todos os livros que pertencem ao gênero "Fantasia".
db.biblioteca.find({ genero: "Fantasia" }).pretty();

//Altere o estado de disponibilidade do livro "O Pequeno Príncipe" para `true` (disponível) utilizando um comando de atualização.
db.biblioteca.updateOne(
    { titulo: "O Pequeno Príncipe" },
    { $set: { disponivel: true } }
);