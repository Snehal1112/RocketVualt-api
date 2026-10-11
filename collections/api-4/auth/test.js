// Shared helpers. Load them from any script tab with:
// const { greet } = require('./test.js');

const greet = (name) => `Hello, ${name}`;

module.exports = {
  greet,
};
