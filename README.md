
Modulo 01 - Conceitos do NODE.JS

Conceitos utilizados: API REST, MIDDLEWARES, CRUD, NODE.JS.
Framework utilizada: EXPRESS
Ferramenta utilizada para envio de requisições: INSOMNIA.

Sobre o desafio : Crie uma aplicação para armazenar projetos e suas tarefas do zero utilizando Express.

Rotas:

Cadastro de projeto:
(POST)
Utilizando a rota http://localhost:3000/projects envie uma requisição com um JSON informando { "id": "1", "title": 'Novo projeto', "tasks": [] }

Edição de um projeto:
(PUT)
A rota para edição de um projeto é http://localhost:3000/projects/:id , onde deve se informar o id no Route Params do projeto em que deseja realizar a alteração. No JSON deve informar { "title": 'Novo titulo'}

Listagem de projetos:
(GET)
Utilizando a rota http://localhost:3000/projects é listado todos os projetos.

Deletar um projeto:
(DELETE)
A rota utilizada para deletar um projeto é http://localhost:3000/projects/:id , deve se informar o id no Route params para identificação de qual projeto deverá ser excluido.

Cadastro de uma tarefa:
(POST)
Envie uma requisição para rota http://localhost:3000/projects/:id/tasks informando o id do projeto que deseja incluir a tarefa com um JSON { "title": "Nova tarefa" }


