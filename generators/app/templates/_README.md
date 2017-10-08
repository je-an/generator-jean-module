## Description

<%= description %>

## Support
Supports both CommonJS and AMD eco system. If there is no loader, <%= constructor %> is registered as a browser variable.

## Code Example
- Use it as browser variable
```js
var obj = new <%= constructor %>();
```
- Use it with require.js
```js
require(["path/to/<%= constructor %>"], function(<%= constructor %>){
    // Work with <%= constructor %>
});
```
- Use it with node.js
```js
var <%= constructor %> = require("<%= name %>");
```
## Installation

`npm install <%= name %> --save --legacy-bundling`

## API Reference

TBD

## Tests

- Open spec/spec-runner.html in browser to see the test cases.

## License

MIT