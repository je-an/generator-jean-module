## Description

<%= description %>

## Support
Supports both CommonJS and AMD eco system. If there is no loader, <%= constr %> is registered as a browser variable.

## Code Example
- Use it as browser variable
```js
var obj = new <%= constr %>();
```
- Use it with require.js
```js
require(["path/to/<%= constr %>"], function(<%= constr %>){
    // Work with <%= constr %>
});
```
- Use it with node.js
```js
var <%= constr %> = require("<%= name %>");
```
## Installation

`npm install <%= name %> --save --legacy-bundling`

## API Reference

TBD

## Tests

- Open spec/spec-runner.html in browser to see the test cases.

## License

MIT