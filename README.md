# bcbs-code-project
Take home coding project for BCBS interview. This project consists of the following:

- Node Express backend server (root folder: express-server)
- React application bootstrapped with Create React App  (root folder: bcbs-react-app)
- Web Component library created with StencilJS and integrated with Storybook (root folder: stencil-web-components)
- React component library containing React wrappers around the web components that were created with StencilJS (root folder: ahagenson-bcbs-react-components)

## Express Server
The Node Express server retrieves data from a GraphQL API (https://anilist.gitbook.io/anilist-apiv2-docs/overview/graphql/getting-started) and exposes REST endpoints to be called by the bcbs-react-app. To run the server navigate to the express-server folder and run `npm start`. This will start the server locally on port 4000.

## Web Component library

## React Component library

## React App
To run the React application navigate to the bcbs-react-app folder and run `npm start`.

## Running Storybook
To preview web components in Storybook navigate to the stencil-web-components project and use the command `npm run storybook`


