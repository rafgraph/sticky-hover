import React, { PropTypes } from 'react';
import radium from 'radium';

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
};

function RadiumTest({ title, description }) {
  const id = title.replace(/ /g, '-').toLowerCase();

  return (
    <div className="test">
      <h2 id={id}>{title}</h2>
        {description}
      <div className="anchor-tag">
        <a
          key="a" href={`#${id}`}
          style={{ ':hover': { color: 'green' }, ':active': { color: 'red' } }}
        >Anchor tag: hover is green, active is red</a>
      </div>
      <div className="button-tag">
        <button
          key="b"
          style={{ ':hover': { color: 'green' }, ':active': { color: 'red' } }}
        >Button tag: hover is green, active is red</button>
      </div>
    </div>
  );
}

RadiumTest.propTypes = propTypes;

export default radium(RadiumTest);
