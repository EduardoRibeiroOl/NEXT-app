#Utilitários temporários
prisma para a base de dados leitura do meu banco de dados relacional -- Postgres--

##Instar o cliente do prisma
###npm install @prisma/client

##Para .env:
###DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
              base de dados//usuario:senha:porta do postgres/nome do banco?schema=normalmente pulblico

##Para o prisma depois da montagens de seus models:
###npx prisma migrate dev --name init

caso dê errado e você não tenha nenhum dado relevante:
###npx prisma migrate reset

e dê o migrate novamente 

##Configurar cliente para jogar informaçãoo para meu back-end



usando NEXT.js para fazer o back-end da aplicação
*Necessário react para fazer aplicação web com o NEXT.js*
