# Vue 3 + TypeScript + Vite Todo list

## Requirements

Requirements on windows: https://github.com/coreybutler/nvm-windows/releases

install NVM and then once installed, Open your terminal (CMD) as administrator and run `nvm install v16.13.2`
Once that has finished, finally run `nvm use v16.13.2`

you can now open a terminal in the projects directory and run `nvm install` and `nvm run dev` to start the development server

## VSCode and Extensions

VSCode : https://code.visualstudio.com/download

ESLint : https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

Volar : https://marketplace.visualstudio.com/items?itemName=Vue.volar

Tailwind CSS IntelliSense : https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss

## Starting Fresh?

`npm create vite@latest` will create a new project for you.
Select vue and typescript.

### Tailwindcss

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
Modify tailwind.config.cjs

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Moddify `src/style.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### ESLint

```bash
npm install eslint -g
npm install @typescript-eslint/parser @vue/eslint-config-typescript eslint eslint-config-airbnb-base eslint-plugin-import eslint-plugin-vue --save-dev
```

Add the .eslintrc.cjs to your project folder 



### TODO:

You can get icons from here:
https://feathericons.com/

1. Create and style a button that will remove all completed items