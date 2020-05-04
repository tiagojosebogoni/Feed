# Informações API
  Projeto de estudo onde é possível fazer um CRUD de um feed
  
  ## Tecnologias utilizadas
    - express
    - typescript
    - eslint
    - prettier
    - banco postgres

## Instalação
  ## Configuração do banco
    1) Tenha o postgres instalado com uma base de nome 'feed'

  ## Configurando a aplicação
    1) Clone este repositório 'git clone https://github.com/tiagojosebogoni/feed.git'
    2) Entre na pasta do projeto clonado 'cd feed/backend'
    3) Execute o comando 'yarn' para instalar as depedências
    4) Execute o comando 'yarn typeorm migration:run' para rodar as migrações e fazer o impacto da(s) tabela(s) no banco
    5) Execute o comando 'yarn dev:server' para rodar a aplicação.

## Importação do do arquivo do insomnia para teste da API
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Feed&uri=https%3A%2F%2Fraw.githubusercontent.com%2Ftiagojosebogoni%2FFeed%2Fmaster%2FInsomnia_2020-05-02.json)

# Informações MOBILE
  Projeto de estudo onde é possível listar um feed de notícias buscando de um servidor.

## Tecnologias utilizadas
    - React Native
    - eslint
    - prettier
    - Styled-components

## Instalação
  ## Configurando a aplicação
    1) Clone este repositório 'git clone https://github.com/tiagojosebogoni/feed.git'
    2) Entre na pasta do projeto clonado 'cd feed/mobile'
    3) Execute o comando 'yarn' para instalar as depedências
    4) Execute o comando yarn android para instalar a aplicação no dispositivo.
    5) Depois de instalado a aplicação se der algum problema pode rodar o comando yarn start para abrir o bundle.