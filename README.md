<h1 align=center>Kafka-Connection</h1>

## Sumário
- [🗒️ Descrição](#️-descrição)
- [🔗 Rotas](#-rotas)
  - [GET `localhost:3000/fetchDeals`](#get-localhost3000fetchdeals)
  - [GET `localhost:3001/orders`](#get-localhost3001orders)
  - [GET `localhost:3001/orders/:date`](#get-localhost3001ordersdate)
- [❓ Explicações](#-explicações)
- [🔠 Variáveis de ambiente](#-variáveis-de-ambiente)
- [🤖 Testes automatizados](#-testes-automatizados)
- [🤔 Como usar ?](#-como-usar-)
## 🗒️ Descrição
Esse repositório contém 2 microsserviços que se comunicam por um sistema de fila Kafka. <br/>
Um deles busca as **"deals"** na api do **pipedrive**, salva o histórico em um banco MongoDB e envia para o outro microsserviço as informações da **"deal"**. <br/>
**Esse microsserviço escuta a porta 3000** <br/>

O outro microsserviço recebe essas informações e salva em um banco Postgres. Por meio de endpoints REST, é possível que liste todas essas **"deals"**, ou se preferir, buscar por data de sincronização. <br/>
**Esse microsserviço escuta a porta 3001**<br/>

## 🔗 Rotas
### GET `localhost:3000/fetchDeals`
Essa rota serve para buscar os dados na api do `pipedrive` e mandar as informações para o outro microsserviço.

### GET `localhost:3001/orders`
Essa rota serve para listar todos os pedidos salvos.

### GET `localhost:3001/orders/:date`
Essa rota recebe uma data pelos parâmetros da rota e retorna todos os pedidos que foram salvos nesse dia.

## ❓ Explicações
Durante o desenvolvimento, em alguns momentos o docker-compose não registrava as variáveis da .env dentro do pacote `order-management`. Para evitar isso, duplique a `.env.example` do `root directory`, renomeie para `.env` e escreva novamente os valores de forma que fique idêntica a `.env` do pacote `order-management`.

## 🔠 Variáveis de ambiente
**PG_USER**: Username para criar e conectar ao banco postgres. <br/>
**PG_PASS**: Senha para criar e conectar ao banco postgres. <br/>
**PG_DB**: Nome do banco para criar e conectar ao banco postgres. <br/>
**API_TOKEN**: Token da api do `pipedrive` para fazer as requisições.

## 🤖 Testes automatizados
Antes de rodar os testes, é necessário ter um baco de dados postgres com o nome `test` e com a mesma senha/username.
Se você utiliza o `Beekeeper-Studio`, basta rodar a query:
```
CREATE DATABASE test
```
Após isso, no `root-directory`, digite o comando:
```
yarn test
```

## 🤔 Como usar ?
1) Primeiro clone esse repositório e instale as dependências.
```
git clone https://github.com/CauaMatheus/Desafio-Back-end-Junior.git
cd Desafio-Back-end-Junior
yarn
```

2) Dentro de cada pacote tem uma `.env.example`. Duplique ela e renomeie para `.env`, após isso complete com os valores desejáveis. <br/>

3) Rode os containers no `root directory` com o comando:
```
docker-compose up -d
```
4) Rode as migrations do banco de dados:
```
yarn migration:run
```

5) Agora você poderá ver os logs de cada container com os comandos:
```
docker logs pipedrive -f
```
```
docker logs order-management -f
```
