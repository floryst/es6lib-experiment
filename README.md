# es6lib: esm library output testing

Goal: Output ES modules.

To build:
- with rollup: `npm run build:rollup`
- with webpack: `npm run build:webpack`

Webpack doesn't output ES modules yet.
Even when outputting individual entry files for each source file and telling babel to preserve imports/exports, webpack outputs cannot be imported with ES syntax.

Rollup does this much better, and seems to be the way to go for ES output.

To play with the example:
- `cd example`
- `npm install`
- `npm run build`
- `node dist/app.js`
