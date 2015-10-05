const React = require('react');

module.exports = class SomeClass extends React.Component {
  state = {
    a: 10,
  }

  render() {
    return React.DOM.div(null, 'Hello, world!');
  }
};
