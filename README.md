# React + TypeScript + Vite

## This is a home assigment (2 days)
This is a basic reposts dashboard that retrieves/shows reports from a mocked Promise. Stack:
- React + TS + Vite
- MUI + MUI Charts + MUI DataGrid is used
- react-router-dom

## This application uses a secret key VITE_API_SECRET_KEY
This key is used to be able to access data from homework server.
For local testing:
- Create .env file at root level. Add VITE_API_SECRET_KEY to .env file.

To test on production services:
- ### Vercel:
    Go to your Vercel dashboard.
    Select your project.
    Go to the "Settings" tab.
    Navigate to the "Environment Variables" section.
    Add your environment variables (e.g., VITE_API_SECRET_KEY).


- ### Netlify:
    Go to your Netlify dashboard.
    Select your site.
    Go to "Site settings".
    Under "Build & deploy", find "Environment".
    Add your environment variables (e.g., VITE_API_SECRET_KEY).


- ### GitHub Actions:
    Go to your repository on GitHub.
    Click on "Settings".
    Navigate to "Secrets and variables" > "Actions".
    Add your secrets (e.g., VITE_API_SECRET_KEY).
    

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
