# sunrise_task_imlementation
# Getting Sterted
# Project written mainly using the following useful tools 
* node.js
* express
* postgresql
* sequelize
* jwt
### Install nodemon and babel cli globally
* npm i -g nodemon npm i -g babel-cli
### Installation
* npm i
### Run model migrations
* sequelize model:create --name Todo --attributes title:string
* sequelize model:create --name TodoItem --attributes content:string,complete:boolean
* sequelize model:create --name User --attributes username:string,password:string
* sequelize db:migrate
* export DATABASE_URL=postgres://{user}:{password}@{hostname}:{port}/{database-name}
* npm run start:dev
