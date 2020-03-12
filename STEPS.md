# Steps to build an API first TypeScript service

1. Prepare to use TypeScript and express
    - `git init`
    - `npm init -y`
    - `npm i -S typescript ts-node ts-node-dev express @types/express`
    - Add `start` and `start-dev` scripts in `package.json` to run with ts-node
    - Add a minimal express server program in `src/index.ts`

2. Serve Swagger UI
    - `npm i -S swagger-ui-express @types/swagger-ui-express js-yaml @types/js-yaml`
    - Create am Open API version 3 file
    - Create an `api_ui.ts` file to serve the Swagger UI
    - Import to `index.ts`
