aplicação feita com Node.js, TypeScript, Fastify, Prisma ORM, PostgreSQL e Docker.

# Instalação

```bash
npm install
```

# Configuração

1. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

```env
DATABASE_URL="postgresql://<usuario>:<senha>@<host>:<porta>/<nome_do_banco>?schema=public"
```

2. Garanta que o Docker esteja instalado na sua máquina e execute o seguinte comando para subir o container do banco de dados rodando PostgreSQL:

```bash
docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=mypassword -d postgres
```

postgres é o nome do container, mypassword é a senha do banco de dados.
eles vão ser usados no arquivo .env
exemplo .env: DATABASE_URL="postgresql://postgres:mypassword@localhost:5432/postgres?schema=public"

3. No terminal do arquivo, execute o comando para criar as tabelas no banco de dados:

```bash
npx prisma migrate dev
npx prisma generate
```

# Execução

```bash
npm run dev
```

para acessar a aplicação, acesse o endereço `http://localhost:5050` no seu navegador.

para ver as documentações da API, acesse o endereço `http://localhost:5050/docs` no seu navegador.

# Fluxo do sistema

1. Cadastro de Pessoas (User):

- Todas as pessoas que podem receber cestas devem ser cadastradas no sistema primeiro

2. Criação de Cestas (Cesta):

- As cestas são criadas individualmente e associadas a pessoas (User).

3. Registro de Compras (Compra):

- As compras são registradas para documentar o fornecedor, a quantidade adquirida, e o custo.
- Associa cestas já existentes à compra.
- Caso a cesta não exista, permite criá-la diretamente durante o registro da compra.
