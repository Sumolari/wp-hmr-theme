# A WordPress Theme with HMR

This is a starter theme that supports Hot Module Replacement for stylesheets and
scripts. This theme also supports SCSS stylesheets and TypeScript and generates
vanilla CSS/JS assets for production usage.

Enjoy a modern frontend development experience when writing WordPress themes!

## 🏗 Architecture

> There is a [detailed explanation of how all of this works](https://llu.is/how-to-write-wordpress-themes-with-sass-typescript-and-hmr/)
> and a step-by-step guide to add HMR support to any WordPress theme.

This theme uses TypeScript and SASS. Vanilla JS and CSS assets are generated
using Vite. During development Vite runs in dev mode, which allows hot module
reloading.

The development environment is dockerized but Vite runs on the host machine to
get better logs and avoid permissions issues. Vite server is exposed to the
Docker containers by passing the host machine IP address to the container.

`composer` handles PHP dependencies and scripts used to lint and format PHP code.
`npm` handles NPM dependencies and scripts used to build the theme.

Hot module replcament is achieved loading `@vite/client` module from the frontend.
This module automatically detects calls to files served by Vite and takes care of
reloading those files whenever they change.

## 🛠 Developing the theme

To start the development environment, just run `npm start`, after installing all
NPM dependencies. From a new system this looks like:

```sh
$ nvm use
$ npm i
$ npm start
```

### Requirements

- Docker
- Docker-compose
- Node (NVM)
- NPM
- PHP>=7.4.9
- Composer

### Scripts

- `npm start` – Starts the Docker containers and Vite dev server. Site is
  available at [localhost:8080](http://localhost:8080) after a few seconds.
- `npm run lint` – Lints TypeScript, SASS and PHP code. Also checks that all
  files have a known purpose.
- `npm run build` – Build TypeScript and SASS code so it can be used by WordPress.

## 📦 Building the theme

To build the theme just run `npm run build`.

From a new system this looks like:

```sh
$ nvm use
$ npm i
$ npm run build
```

## 🚀 Releasing the theme

After building the theme, it can be released like any regular WordPress theme:

- Copying the files in `theme` folder to `wp-content/themes/my-theme`.
- Zipping `theme` folder and uploading it through WordPress theme upload UI.
