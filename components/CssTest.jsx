import React, { PropTypes } from 'react';

const propTypes = {
  title: PropTypes.string.isRequired,
  testClass: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
  tagText: PropTypes.string.isRequired,
};

function CssTest({ title, testClass, description, tagText }) {
  return (
    <div className="test">
      <h2 id={`${testClass}-title`}>{title}</h2>
      {description}
      <div className="anchor-tag">
        <a href={`#${testClass}-title`} className={testClass}>
          Anchor tag: {tagText}
        </a>
      </div>
      <div className="button-tag">
        <button className={testClass}>
          Button tag: {tagText}
        </button>
      </div>
    </div>
  );
}

CssTest.propTypes = propTypes;

export default CssTest;
