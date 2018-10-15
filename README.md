# NodeJS reverse-proxy example

<img src="https://i.imgur.com/RVpDC4x.png"/>

Simple <a href="https://www.nginx.com/resources/glossary/reverse-proxy-server/">reverse-proxy</a> server based on Nginx NodeJS and PostgreSQL.

NodeJS part of this project is based on <a href="https://github.com/morzhanov/nodejs-koa-boilerplate">nodejs-koa-boilerplate</a>

## Installation

Use these steps to install project

1. Install Docker: https://www.docker.com/
2. Build project: `docker-compose build`
3. Run docker-compose: `docker-compose up -d`
4. Stop containers: `docker-compose down`

For local development (NodeJS) pass variables in .env file and use local PostgreSQL database (you can use official <a href="https://hub.docker.com/_/postgres/">Docker</a> container).

## NodeJS project folders structure

This boilerplate contains such folders:

- <b>/src </b> - main sources folder.
- <b>/src/constants </b> - app constants.
- <b>/src/controllers </b> - contain controllers that receives requests from routes, executes business logic via services and returns responses to client.
- <b>/src/db </b> - contain scripts to setup and manage database
- <b>/src/middleware </b> - app middlewares
- <b>/src/entities </b> - database entities
- <b>/src/services </b> - services contains logic to manage database, execute requests to other servers, change application behabior, and etc.
- <b>/src/app.js </b> - app configuration
- <b>/src/index.js </b> - contain main scripts that configures and run server
- <b>/test </b> - contains tests for controllers, services and other parts of application.

## NodeJS project scripts

- start - run dev server using nodemon
- build - build project
- serve - run built files

## Main Technologies and libraries

- <a href="https://www.docker.com/">Docker</a>
- <a href="https://nodejs.org/en/">NodeJS</a>
- <a href="https://www.nginx.com/">Nginx</a>
- <a href="https://www.postgresql.org/">PostgreSQL</a>
- <a href="https://koajs.com/#">KoaJS</a>
- <a href="https://babeljs.io/">Babel</a>
- <a href="https://github.com/auth0/node-jsonwebtoken">jsonwebtoken</a>
- <a href="https://github.com/typeorm/typeorm">typeorm</a>
- <a href="https://github.com/jeffijoe/awilix">awilix</a>
- <a href="https://github.com/jeffijoe/awilix-koa">awilix-koa</a>
- <a href="https://github.com/koajs/bodyparser">koa-bodyparser</a>
- <a href="https://github.com/varunpal/koa-cookie">koa-cookie</a>
- <a href="https://github.com/alexmingoia/koa-router">koa-router</a>

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

Vlad Morzhanov

## License

#### (The MIT License)

Copyright (c) 2018 Vlad Morzhanov.
You can review license in the LICENSE file.

docker build -t nodejs-reverse-proxy-example/nodejs .

docker run -d nodejs-reverse-proxy-example/nodejs
