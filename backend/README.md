## Informações
  Projeto de estudo onde é possível fazer um CRUD de um feed
  ## Tecnologias utilizadas
    - express
    - typescript
    - eslint
    - prettier
    - banco postgres


# Instalação
  ## Configuração do banco
    1) Tenha o postgres instalado com uma base de nome 'feed'

  ## Configurando a aplicação
    1) Clone este repositório 'git clone https://github.com/tiagojosebogoni/Feed.git'
    2) Entre na pasta do projeto clonado 'cd Feed'
    3) Execute o comando 'yarn' para instalar as depedências
    4) Execute o comando 'yarn typeorm migration:run' para rodar as migrações e fazer o impacto da(s) tabela(s) no banco
    5) Execute o comando 'yarn dev:server' para rodar a aplicação.

# Importação do do arquivo do insomnia para teste da API
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Feed&uri=https%3A%2F%2Fraw.githubusercontent.com%2Ftiagojosebogoni%2FFeed%2Fmaster%2FInsomnia_2020-05-02.json)
