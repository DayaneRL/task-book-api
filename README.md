## Node API com drizzle orm e postgres

Projeto de api para gerenciamento de listas de tarefas.
Foi utilizado conexão com banco de dados com postgreSQL pelo suporte nativo dentro do drizzle.
 - info: https://orm.drizzle.team/docs/get-started-postgresql
A função *principal* do sistema é gerenciar as rotas e dados das tasks e tasks lists.

obs: Atualmente estou usando o Neon Serverless Postgres como database para versão publicada,
mas para fins de desenvolvimento uso container do docker.

Ele foi criado mais como um estudo prático do que eu aprendi no "NLW Pocket: JavaScript",
então por enquanto ele ainda ta pequeno, mas quero evoluir esse projeto no futuro.

### comandos
``` bash
npm install
```
#### drizzle
Para gerar as migratios baseada no schema
``` bash
npx drizzle-kit generate
```
Aplicar a migração
``` bash
npx drizzle-kit migrate
```
Ativar servidor local pro drizzle studio que pode ser acessado pra ver o database
``` bash
npx drizzle-kit studio
```
#### docker
``` bash
docker compose up -d
```

seed* opcional
``` bash
npm run seed
```
#### rodar projeto
``` bash
npm run dev
```
