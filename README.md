# Nume

## Como funciona

Acesse o jogo em http://nume.tarsis.cc/

Para manter uma pontuação alta você não pode clicar no mesmo número duas vezes seguidas.

<a href="http://nume.tarsis.cc/">
  <img src="./screenshot.png" />
</a>

## Instalação

Instale o [Node.js](https://nodejs.org/en/) e o [Yarn](https://yarnpkg.com/)

Clone esse repository

```sh
git clone https://github.com/tmvdl/nume.git
cd nume
```

Instale as dependências do projeto

```sh
yarn
```

Inicie o projeto

```sh
yarn start
```

Visualize no navegador

http://localhost:4200/

## Instalação com Docker

```sh
docker run --name nume -d -p 4200:80 tmvdl/nume
```
