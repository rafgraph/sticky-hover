import React from 'react';

function CssTest({ title, testClass, description }) {
  return (
    <div className="test">
      <h2 id={`${testClass}-title`}>{title}</h2>
      {description}
      <div className="anchor-tag">
        <a href={`#${testClass}-title`} className={testClass}>
          Anchor tag: hover is green, active is red
        </a>
      </div>
      <div className="button-tag">
        <button className={testClass}>
          Button tag: hover is green, active is red
        </button>
      </div>
    </div>
  );
}

export default CssTest;
