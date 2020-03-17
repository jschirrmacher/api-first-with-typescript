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

3. Add test environment
    - `npm i -D mocha mocha-typescript @types/mocha mochawesome should supertest @types/supertest nyc`
    - Refactor `index.ts` to make the server more easily testable
    - Add a simple test
    - Make it callable via `package.json`

4. Bind OpenAPI to implementation
    - Define a schema in Open API
    - `npm i -D dtsgenerator`
    - Define and use `package.json` script to generate types from OAS3
    - `npm i -S express-openapi`
    - Call express-openapi in `src/Server.ts`
    - Adapt tests

5. Extend API
    - Add parameter to Open API
    - Define test
    - Implement operation

6. Add another route (API first)
    - Create a POST route in OAS3 with parameter and result schema
    - Add a test case
    - Create an operation in Operations.ts
