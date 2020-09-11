import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.element.isRequired,
};

function App({ children }) {
  return (
    <div>
      <h1>Sticky Hover Tests</h1>
      <div id="repo-link"><a href="https://github.com/rafgraph/sticky-hover">
        https://github.com/rafgraph/sticky-hover
      </a></div>
      {children}
    </div>
  );
}

App.propTypes = propTypes;

export default App;
