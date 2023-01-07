# Nume

[![github/actions/workflow/status](https://img.shields.io/github/actions/workflow/status/brtmvdl/nume/github-release.yml?label=artifacts)](https://img.shields.io/github/actions/workflow/status/brtmvdl/nume/github-release.yml?label=artifacts) [![github/actions/workflow/status](https://img.shields.io/github/actions/workflow/status/brtmvdl/nume/docker-push.yml?label=docker)](https://img.shields.io/github/actions/workflow/status/brtmvdl/nume/docker-push.yml?label=docker) [![github/license](https://img.shields.io/github/license/brtmvdl/nume)](https://img.shields.io/github/license/brtmvdl/nume) [![github/stars](https://img.shields.io/github/stars/brtmvdl/nume?style=social)](https://img.shields.io/github/stars/brtmvdl/antify?style=social)

## Como funciona

Para manter uma pontuação alta você não pode clicar no mesmo número duas vezes seguidas.

<a href="http://nume.tarsis.cc/">
  <img src="./docs/screenshot.png" />
</a>

## Configuração (desenvolvimento)

Instale o [Node.js](https://nodejs.org/en/) e o [Yarn](https://yarnpkg.com/)

Clone esse repositório

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

## Configuração (Docker)

```sh
docker run -d -p 80:80 tmvdl/nume
```
