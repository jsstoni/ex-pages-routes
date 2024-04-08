

# Usage

> npm i ex-pages-routes

ESM: ECMAScript
```js
import express from "express";
import routes from "ex-routes";
const app = express();

(async () => {
  const router = await routes();
  app.use(router);
  app.listen(5000);
})();
```

CJS: CommonJS
```js
const express = require("express");
const { default: routes } = require("ex-routes");
const app = express();

(async () => {
  const router = await routes();
  app.use(router);
  app.listen(5000);
})();
```