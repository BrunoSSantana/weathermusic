<h1 align="center">
	<img alt="Logo" src="https://cdn-icons-png.flaticon.com/512/5815/5815943.png" width="200px" />
</h1>

<h3 align="center">
  Weathermusic
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/BrunoSSantana/weathermusic">
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/BrunoSSantana/weathermusic">
  
  <a href="https://github.com/BrunoSSantana/weathermusic/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/BrunoSSantana/weathermusic">
  </a>
  
  <a href="https://github.com/BrunoSSantana/weathermusic/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/BrunoSSantana/weathermusic">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/BrunoSSantana/weathermusic">
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>



<img alt="Layout" src="https://i.ibb.co/9pzf4x4/screenshots.png">

## 👨🏻‍💻 About the project

*This application was developed during the first week of community challenges [Holocron](https://www.instagram.com/somosholocron/).
This challenge created by  Gabriel Sartorato with the following description:
O aplicativo tem como objetivo buscar playlists de acordo com o clima da cidade ou a localização informada pelo usuário. O site mostrará uma playlist diferente para cada intervalo de temperatura.
Caso a temperatura seja maior que 32 graus, deverá retornar Rock, de 32 a 24 deverá retornar Pop, de 24 a 16 deverá retornar Clássica e menor que 16 deverá retornar Lofi.
O usuário poderá salvar a playlist informada, caso ele goste das músicas sugeridas.
Apis sugeridas: 
[https://openweathermap.org/current](https://openweathermap.org/current)
[https://rapidapi.com/apidojo/api/shazam](https://rapidapi.com/apidojo/api/shazam)*

**Application Requirements**

1. Deve ser possível criar uma conta para um usuário
2. Apenas usuários pode ter acesso as rotas *'/'* e *'/profile'*
3. Deve ser possível buscar uma playlist a partir do input de uma cidade
    1. busca a temperatura da cidade
    2. Caso a temperatura seja maior que 32 graus, deverá retornar Rock, de 32 a 24 deverá retornar Pop, de 24 a 16 deverá retornar Clássica e menor que 16 deverá retornar Lofi
4. Deve ser possível salvar determinada playlist
5. Deve ser possível ser redirecionado ao clicar em qualquer card das músicas retornadas na playlist
5. Deve ser possível listar todas as playists do usuário na rota *'/profile'*
6. Deve sesr possível mostrar todas as músicas da playlist ao clicar na playlist salva

## 🚀 Technologies

Technologies that we used to develop this api

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [PostgreSQL](https://www.postgresql.org/)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
- [ReactJS](https://reactjs.org/)
- [Eslint](https://eslint.org/)
- [React Router DOM](https://reacttraining.com/react-router/)
- [React Navigation](https://reactnavigation.org/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)

## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click here [![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Weathermusic&uri=https%3A%2F%2Fraw.githubusercontent.com%2FBrunoSSantana%2Fweathermusic%2Fmaster%2Fdocs%2Fdoc.json) 

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/) with database named `weathermusic`

**Clone the project and access the folder**

```bash
$ git clone https://github.com/Bruno/weathermusic.git && cd weathermusic
```

**Follow the steps below**

### Backend

```bash
# Starting from the project root folder, go to backend folder
$ cd server

# Install the dependencies
$ yarn

# Create the instance of postgreSQL using docker
$ docker run --name weathermusic-postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# Make sure the keys in 'ormconfig.json' to connect with your database
# are set up correctly.

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev

# Well done, project is started!
```

### Web

_Obs.: Before to continue, be sure to have the API running_

```bash
# Starting from the project root folder, go to frontend folder
$ cd frontend

# Install the dependencies
$ yarn

# Be sure the file 'src/services/api.ts' have the IP to your API

# Start the client
$ yarn start
```


## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork BrunoSSantana/weathermusic
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd weathermusic

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
## 👨‍💻 Contributors

All the success we achieve is the result of teamwork. It was an honor to have this opportunity to work with these great professionals and to be bringing valuable knowledge of this experience. And a special thanks to the [Holocron community](https://www.instagram.com/somosholocron/) 💜.

<table>
  <tr>
    <td align="center"><a href="https://github.com/BrunoSSantana"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/61945340?v=4" width="100px;" alt=""/><br /><sub><b>Bruno Santana</b></sub></a><br /><a href="https://github.com/BrunoSSantana/" title="Bruno Santana"></a></td>
    <td align="center"><a href="https://github.com/DouglasANS/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/66889830?v=4" width="100px;" alt=""/><br /><sub><b>DouglasANS</b></sub></a><br /><a href="https://github.com/DouglasANS/" title="Douglas Agostinho"></a></td>
    
  </tr>
</table>
