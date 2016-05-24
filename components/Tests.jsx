import React from 'react';
import { hasTouch } from 'detect-touch';

function Tests() {

  function generateTest(title, testClass, description) {
    return (
      <div className="test">
        <h2>{title}</h2>
        <div className="test-description">
          {description}
        </div>
        <div className="anchor-tag">
          <a href="#" className={testClass}>Anchor tag: hover is green, active is red</a>
        </div>
        <div className="button-tag">
          <button className={testClass}>Button tag: hover is green, active is red</button>
        </div>
      </div>
    );
  }

  return (
    <div className={hasTouch ? 'touch' : 'no-touch'}>
      {generateTest("Test 1", "test-1",
        <div>
          <code>:hover</code> and <code>:active</code> pseudo-classes applied
          normally (without restriction).
        </div>
      )}
      {generateTest("Test 2", "test-2",
        <div>
          <code>:hover</code> and <code>:active</code> pseudo-classes applied
          inside <code>@media (hover: hover) {'{ ... }'}</code>.
        </div>
      )}
      {generateTest("Test 3", "test-3",
        <div>
          <code>:hover</code> and <code>:active</code> pseudo-classes applied
          normally, but reset inside
          of <code>@media (hover: none) {'{ ... }'}</code>.
        </div>
      )}
    </div>
  );
}

export default Tests;
