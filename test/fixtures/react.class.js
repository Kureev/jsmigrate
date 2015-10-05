const React = require('react');

module.exports = React.createClass({
  getInitialState() {
    return {
      a: 10,
    };
  },

  render() {
    return React.DOM.div(null, 'Hello, world!');
  },
});
