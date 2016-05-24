import React from 'react';

function App({ children }) {
  return (
    <div>
      <h1>Sticky Hover Tests</h1>
      <div id="repo-link"><a href="https://github.com/rafrex/sticky-hover">
        https://github.com/rafrex/sticky-hover
      </a></div>
      {children}
    </div>
  );
}

export default App;
