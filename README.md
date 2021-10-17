# typescript-express-starter

A somewhat opinionated starter template for a TypeScript - ExpressJS project built with

* server  - [Express](https://expressjs.com/)
* linting - [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
* testing - [Jest](https://jestjs.io/)
* logging - [winston](https://www.npmjs.com/package/winston)
* env management - [dotenv](https://www.npmjs.com/package/dotenv)


# Setting up this codebase

1. Ensure that [Node.js](https://nodejs.org/en/) is installed (node >= 14 and npm >= 7)
2. Clone the repository
```
git clone --depth=1 https://github.com/riteshgn/typescript-express-starter.git <project_name>
```
3. Install dependencies
```
npm clean-install
```
4. Copy [.env-template](.env-template) to a `.env` file and set the `APP_PORT` variable
5. Start the server in development mode using `npm run start`
6. Test the ping route by launching below URL in the browser
```
http://localhost:<APP_PORT>/api/v1/ping
```
7. Run the tests using
```
npm run test
```


# Project structure

## Source files
| Name | Description|
| ------------ | ---------------- |
| **src/app.ts** | Creates the express app configuring it with required middleware |
| **src/index.ts** | Entrypoint of the project. Configures the app with required dependencies and serves the app on configured port |
| **src/router.ts** | The main router which bootstraps the express app with all required routes |
| **src/server.ts** | Serves the app |
| **src/resources/**`<version>` | Contains versioned resources. Each resource folder will atleast have a `<resource>.router.ts` and `<resource>.controller.ts`. It will also contain all handler, data access and helpers for that resource |
| **src/resources/resources.d.ts** | Common types used by the resources |
| **src/utils** | Contains all utility modules like the logger |

> Note: All tests are inside `__tests__` folder co-located with the corresponding source modules. Test files are named as `<module>.test.ts`



## Configuration files
| Name | Description|
| ------------ | ---------------- |
| **.env-template** | A template with all environment variables used in the project. Should be copied into a `.env` file and filled with required values. **Do not check-in the .env file** |
| **.eslintignore** | Files which the linter should ignore. See: https://eslint.org/docs/user-guide/configuring/ignoring-code#the-eslintignore-file |
| **.eslintrc.json** | Basic ESLint configuration. Simply to setup prettier and typescript |
| **.gitignore** | Files which git should ignore like the coverage/, dist/ and node_module/ folders. See: https://git-scm.com/docs/gitignore |
| **.prettierrc.json** | Prettier settings. See: https://prettier.io/docs/en/configuration.html |
| **jest.config.ts** | Jest test configurations. See: https://jestjs.io/docs/configuration |
| **tsconfig.json** | TypeScript configuration. See: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html |


# Scripts

## Build and Serve

- Compile the typescript and dump the output into `dist/` directory
```
npm run build
```

- Start a server to serve the distribution in the `dist/` directory.
Ensure that the .env is created and the `APP_PORT` variable is set
```
npm run serve
```

## Serve in watch mode

- Start a server in watch mode. No need to build the distribution first.
Ensure that the .env is created and the `APP_PORT` variable is set
```
npm run start
```

## Testing & Static Analysis

- Show typescript compilation and linting issues
```
npm run lint
```

- Execute the jest tests
```
npm run test
```

- Execute the jest tests and print coverage information
```
npm run test:coverage
```

- Execute the jest tests in watch mode along with coverage information
```
npm run test:watch
```