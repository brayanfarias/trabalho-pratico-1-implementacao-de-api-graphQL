# API GraphQL de Tarefas

Esta API fornece acesso a informações sobre tarefas e usuários. Você pode usar GraphQL para consultar e manipular esses dados.


## Configuração do Projeto

Este projeto utiliza Node.js, GraphQL, e MongoDB para criar uma API GraphQL para tarefas e usuários. Utiliza também container docker via docker-compose para criar o banco de dados Mongo.
As principais dependências incluem apollo-server, graphql e mongoose. Certifique-se de instalá-las usando:
```bash
npm install
```

## Configuração do Projeto

Para criar um container com o mongo db, precisa executar o docker-compose. Na raiz do projeto, execute:
```bash
docker-compose up -d
```

## Executando o Servidor
```bash
npm start
```

Acesse a interface GraphQL em http://localhost:4000/graphql para testar as consultas e mutações.


## Consultas

### Listar todas as tarefas
```graphql
query {
  tasks {
    id
    title
    description
    completed
  }
}
```

### Detalhes de uma tarefa específica
```graphql
query {
  task(id: "ID_DA_TAREFA") {
    id
    title
    description
    completed
  }
}
```

### Listar tarefas concluídas
```graphql
query {
  completedTasks {
    id
    title
  }
}
```

### Listar tarefas pendentes
```graphql
query {
  pendingTasks {
    id
    title
  }
}
```
### Listar todos os usuários
```graphql
query {
  users {
    id
    name
  }
}
```

## Mutações

### Criar uma nova tarefa
```graphql
mutation {
  createTask(title: "Nova Tarefa", description: "Descrição da tarefa", createdBy: "ID_DO_USUÁRIO") {
    title
    description,
    createdBy{
        id
    }
  }
}
```

### Marcar uma tarefa como concluída
```graphql
mutation {
  markTaskAsCompleted(id: "ID_DA_TAREFA") {
    id
    title
    completed
  }
}
```

### Atualizar informações de uma tarefa existente
```graphql
mutation {
  updateTask(id: "ID_DA_TAREFA", title: "Novo Título", description: "Nova Descrição") {
    id
    title
    description
  }
}
```

### Excluir uma tarefa
```graphql
mutation {
  deleteTask(id: "ID_DA_TAREFA") {
    id
    title
  }
}
```


