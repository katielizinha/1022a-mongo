//1) Crie um banco de dados chamando "test"
use("test")

//2)Use o banco "test" e  crie uma coleção chamada "estudante"
use("test")
db.createCollection("estudante")

//3)Use o banco "test" e na coleção "estudante" insira os valores:
//nome = Tere, cpf=123123123,idade=28
use("test")
db.estudante.insertOne({
    "nome":"Tere",
    "cpf":"123123123",
    "idade":28
})

//4) Use o banco "test" e na coleção "estudante" 
//insira 3 registros com um único comando:
use("test")
db.estudante.insertMany([
    {
        "nome":"Maria",
        "cpf":"123123123",
        "idade":18
    },
    {
        "nome":"Tomazini",
        "cpf":"123123123",
        "idade":17
    },
    {
        "nome":"Lays",
        "cpf":"123123123",
        "idade":16
    }
])

//5) Utilizando o banco test Liste todos os resgistros contidos na coleção estudante.
use("test")
db.estudante.find({})

//6) Utilizando o banco test liste todos os registros da coleção estudante
// Onde o nome for igual a "Tere"
use("test")
db.estudante.find({"nome":"Tere"})

//7) Utilizando o banco test liste todos os registros da coleção estudante
// Onde a idade for maior ou igual a "17"
use("test")
db.estudante.find({"idade":{$gte:17}})
//8) Utilizando o banco test liste todos os registros da coleção estudante
// onde a idade for maior que 17 e menor ou igual a 18 e o nome for diferente de "maria"
// Mostre apenas os campos Nome e Idade na resposta.
use("test")
db.estudante.find(
{
    $and:[
        {"idade":{$gt:17,$lte:18}},
        {"nome":{$ne:"Maria"}}
    ]
},
{"nome":1,"idade":1,"_id":0})
