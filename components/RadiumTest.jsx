import React from 'react';
import Radium from 'radium';

function RadiumTest({ title, description }) {
  const id=title.replace(/ /g, '-').toLowerCase();

  return (
    <div className="test">
      <h2 id={id}>{title}</h2>
        {description}
      <div className="anchor-tag">
        <a key="a" href={`#${id}`}
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
