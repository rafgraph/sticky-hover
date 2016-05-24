import React from 'react';
import Radium from 'radium';

function RadiumTest() {
  return (
    <div className="test">
      <h2 id="test-6-title">Test 6</h2>
      <div className="test-description">
        Radium inline <code>:hover</code> and <code>:active</code> styles.
      </div>
      <div className="anchor-tag">
        <a key="a" href="#test-6-title"
          style={{':hover': {color: 'green'}, ':active': {color: 'red'}}}
        >Anchor tag: hover is green, active is red</a>
      </div>
      <div className="button-tag">
        <button key="b"
          style={{':hover': {color: 'green'}, ':active': {color: 'red'}}}
        >Button tag: hover is green, active is red</button>
      </div>
    </div>
  );
}

export default Radium(RadiumTest);
