# Nume

[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/brtmvdl/apply/docker-pull.yml?label=Docker%20pull&link=https%3A%2F%2Fgithub.com%2Fbrtmvdl%2Fapply%2Factions%2Fworkflows%2Fdocker-pull.yml)](https://github.com/brtmvdl/apply/blob/main/.github/workflows/docker-push.yml) [![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/brtmvdl/apply/docker-push.yml?label=Docker%20push&link=https%3A%2F%2Fgithub.com%2Fbrtmvdl%2Fapply%2Factions%2Fworkflows%2Fdocker-push.yml)](https://github.com/brtmvdl/apply/actions/workflows/docker-push.yml) [![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/brtmvdl/apply/github-release.yml?label=GitHub%20release&link=https%3A%2F%2Fgithub.com%2Fbrtmvdl%2Fapply%2Factions%2Fworkflows%2Fgithub-release.yml)](https://github.com/brtmvdl/apply/actions/workflows/github-release.yml) [![github/license](https://img.shields.io/github/license/brtmvdl/apply)](https://img.shields.io/github/license/brtmvdl/apply)  [![github/stars](https://img.shields.io/github/stars/brtmvdl/apply?style=social)](https://img.shields.io/github/stars/brtmvdl/apply?style=social)

<a href="http://nume.tarsis.cc/">
  <img src="./docs/screenshot.png" />
</a>

# How to

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

## License

[MIT](./LICENSE)
