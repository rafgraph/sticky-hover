import React from 'react';
import { hasTouch } from 'detect-touch';
import CssTest from './CssTest';
import RadiumTest from './RadiumTest';
import CustomJsTest from './CustomJsTest';


function Tests() {

  return (
    <div className={hasTouch ? 'touch' : 'no-touch'}>

      <CssTest title="Test 1" testClass="test-1"
        tagText="hover is green, active is red"
        description={
          <div className="test-description">
            <code>:hover</code> and <code>:active</code> pseudo-classes applied
            normally (without restriction).
          </div>
        }
      />

      <CssTest title="Test 2" testClass="test-2"
        tagText="hover is green, active is red, touch active is blue"
        description={
          <div className="test-description">
            <code>:hover</code> and <code>:active</code> (red) pseudo-classes
            applied inside <code>@media (hover: hover)</code>. {' '}
            <code>:active</code> (blue) pseudo-class applied inside {' '}
            <code>@media (hover: none)</code>.
          </div>
        }
      />

      <CssTest title="Test 3" testClass="test-3"
        tagText="hover is green, active is red, touch active is blue"
        description={
          <div className="test-description">
            <code>:hover</code> and <code>:active</code> (red) pseudo-classes
            applied normally. <code>:hover</code> is reset
            and <code>:active</code> (blue) is applied inside of {' '}
            <code>@media (hover: none)</code>.
          </div>
        }
      />

      <CssTest title="Test 4" testClass="test-4"
        tagText="hover is green, active is red, touch active is blue"
        description={
          <div className="test-description">
            <code>:hover</code> and <code>:active</code> (red) pseudo-classes
            applied if <code>.no-touch</code> class is present. {' '}
            <code>:active</code> (blue) is applied if <code>.touch</code> {' '}
            class is present.
          </div>
        }
      />

      <CssTest title="Test 5" testClass="test-5"
        tagText="hover is green, active is red, touch active is blue"
        description={
          <div className="test-description">
            <code>:hover</code> and <code>:active</code> pseudo-classes
            applied if <code>.no-touch</code> class is present, as well as inside
            of <code>@media (hover: hover)</code>. <code>:active</code> (blue)
            is applied if <code>.touch</code> class is present.
          </div>
        }
      />

      <RadiumTest title="Test 6" description={
          <div className="test-description">
            Radium inline <code>:hover</code> and <code>:active</code> styles.
          </div>
      }/>

      <CustomJsTest title="Test 7 - The Fix" description={
        <div className="test-description">
          Custom component <code>StickyHoverFix</code> that implements {' '}
          <code>:hover</code>, <code>:active</code> and {' '}
          <code>:touchActive</code> with inline styles using touch and mouse
          event triggers. The <code>mouseEnter</code> event doesn't {' '}
          <code>setState</code> to simulate <code>:hover</code> if it's
          immediately preceded by a <code>touchEnd</code> event.
        </div>
      }/>

    </div>
  );
}

export default Tests;
