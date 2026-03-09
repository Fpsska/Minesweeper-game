# Getting Started with Minesweeper-game app

###### _This project was bootstrapped with:_

-   [React](https://react.dev/)
-   [Redux-Toolkit](https://redux-toolkit.js.org/)
-   [Vite](https://vite.dev/)
-   [Docker](https://www.docker.com/)
-   [Nginx](https://nginx.org/)

###### _designed by [Gustavo Luz](https://dribbble.com/guztaluz)_

###### _watch demo: [Minesweeper-game](https://Fpsska.github.io/Minesweeper-game)_

#

Guideline for launch:

1. open GIT console on desktop or any directory of your PC, use `git clone https://github.com/Fpsska/Minesweeper-game.git`
2. open cloned project directory with any code editor
3. use `npm install` in terminal console of code editor for download all dependencies
4. use `npm start` allias in terminal console of code editor for run application

Guideline for launch with Docker:

1. open GIT console on desktop or any directory of your PC, use `git clone https://github.com/Fpsska/Minesweeper-game.git`
2. open cloned project directory with any code editor
3. use `docker build . -t <image-name>` for create docker-image
4. use `docker run -d --name <container-name> -p 3000:8080 <image-name>` for start docker-container
5. use `docker run -d --name <container-name> --env-file <../file.env> -p 3000:8080 <image-name>` for start with custom app config

<details>

<summary>Example of valid body of .env file</summary>

```json
APP_PROFILE=develop
APP_HIDE_FEATURES=false
APP_VERSION=1.0.0
```

</details>
