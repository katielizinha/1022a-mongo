//criando o banco
use('fecinavidb');
//deletando a tabela ja existente
db.dropDatabase('fecinavidb');

use('fecinavidb');

//criando a collection
db.createCollection("trabalhos")

// Inserindo mais de um Document ao mesmo tempo.
db.trabalhos.insertMany([
    {
      titulo: "Analise dos fragmentos florestais para a seleção de áreas prioritárias para conservação no município de Indaiatuba-SP ",
      area: "Ciência Exatas",
      autores: [{ nome: "Carlos", email: "carlos.gois@estudante.ifms.edu.br" }],
      dataEnvio: "2024-10-01",
      avaliadores: [{ CPF: "123.456.789-00", nome: "Erika", nota: 8 }],
      mediaAvaliacoes: 8
    },
    {
      titulo: "Inteligência artificial e sua aplicação em segurança cibernética.",
      area: "Informatica",
      autores: [{ nome: "Maria", email: "maria.souza2@estudante.ifms.edu.br" }],
      dataEnvio: "2024-10-02",
      avaliadores: [{ CPF: "987.654.321-00", nome: "Guilherme Terenciani", nota: 9 }],
      mediaAvaliacoes: 9
    },
    {
      titulo: "As ciências sociais e humanas e a pandemia de COVID-19",
      area: "Humanas",
      autores: [{ nome: "José", email: "jose.santos@estudante.ifms.edu.br" }],
      dataEnvio: "2024-10-03",
      avaliadores: [{ CPF: "123.789.456-00", nome: "Pedro", nota: 7 }],
      mediaAvaliacoes: 7
    },
    {
      titulo: "Análise de dados e aprendizado de máquina em saúde.",
      area: "Informática",
      autores: [{ nome: "Ana", email: "ana.souza@estudante.ifms.edu.br" }],
      dataEnvio:"2024-10-04",
      avaliadores: [{ CPF: "321.654.987-00", nome: "Diego Barros", nota: 10 }],
      mediaAvaliacoes: 10
    }
  ]);

//inserindo o insertOne apenas para o trabalho das areas biologicas
db.trabalhos.insertOne({
    titulo: "Características e Funções dos seres vivos;",
    area: "Biológicas",
    autores: [{ nome: "Analya", email: "analya.santana@estudante.ifms.edu.br" }],
    dataEnvio:"2024-10-06",
    avaliadores: [{ CPF: "028.385.937-00", nome: "Erika", nota: 10 }],
    mediaAvaliacoes: 10
  })


  //Codigo para aparecer todos os trabalhois
db.trabalhos.find().pretty();

//codigo para aparecer só o da área biológica
db.trabalhos.find({ area: "Biológicas"}).pretty()