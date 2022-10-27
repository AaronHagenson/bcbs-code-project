# bcbs-code-project
Take home coding project for BCBS interview. This project consists of the following:

- Node Express backend server (root folder: express-server)
- React application bootstrapped with Create React App  (root folder: bcbs-react-app)
- Web Component library created with StencilJS and integrated with Storybook (root folder: stencil-web-components)
- React component library containing React wrappers around the web components that were created with StencilJS (root folder: ahagenson-bcbs-react-components)

## Express Server
The Node Express server retrieves data from a GraphQL API (https://anilist.gitbook.io/anilist-apiv2-docs/overview/graphql/getting-started) and exposes REST endpoints to be called by the bcbs-react-app. To run the server navigate to the express-server folder and run `npm start`. This will start the server locally on port 4000.

## Web Component library
Our shared web components are located in the stencil-web-components project. Create new components in the src/components folder. To display the component in Storybook, create a <mycomponentname>.stories.ts file.

Build the component library by running `npm run build`. Once the components are built they can be viewed in Storybook by running `npm run storybook`. In order to be consumable by other applications the web component library is published as an npm package called ahagenson-bcbs-stencil-web-components. To publish the package, increment the version number in the package.json file and run `npm publish`. 

## React Component library
The React component library imports the web components from stencil-web-components by installing the web component npm package (ahagenson-bcbs-stencil-web-components). After installing the latest version of the npm package, run `npm run build` to create React components wrappers for the web components. After building the project, increment the version number in package.json and publish the React components as an npm package by running `npm publish`. These React components will now be available as an npm package called ahagenson-bcbs-react-components. This package can be imported into a React app to consume the shared components.

## React App
To run the React application navigate to the bcbs-react-app folder and run `npm start`. This app calls our Node Express backend to fetch movie data. It uses the shared web component library by installing the npm package for our React-wrapped components.
