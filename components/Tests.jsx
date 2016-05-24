import React from 'react';
import { hasTouch } from 'detect-touch';
import CssTest from './CssTest';
import RadiumTest from './RadiumTest';


function Tests() {

  return (
    <div className={hasTouch ? 'touch' : 'no-touch'}>
      
      <CssTest title="Test 1" testClass="test-1" description={
          <div className="test-description">
            <code>:hover</code> and <code>:active</code> pseudo-classes applied
            normally (without restriction).
          </div>
      }/>

      <CssTest title="Test 2" testClass="test-2" description={
          <div className="test-description">
            <code>:hover</code> and <code>:active</code> pseudo-classes only
            applied inside <code>@media (hover: hover) {'{ ... }'}</code>
          </div>
      }/>

      <CssTest title="Test 3" testClass="test-3" description={
          <div className="test-description">
            <code>:hover</code> and <code>:active</code> pseudo-classes applied
            normally, but reset inside
            of <code>@media (hover: none) {'{ ... }'}</code>
          </div>
      }/>

      <CssTest title="Test 4" testClass="test-4" description={
          <div className="test-description">
            <code>:hover</code> and <code>:active</code> pseudo-classes only
            applied if <code>.no-touch</code> class is present.
          </div>
      }/>

      <CssTest title="Test 5" testClass="test-5" description={
          <div className="test-description">
            <code>:hover</code> and <code>:active</code> pseudo-classes
            applied if <code>.no-touch</code> class is present, as well as inside
            of <code>@media (hover: hover) {'{ ... }'}</code>
          </div>
      }/>

      <RadiumTest title="Test 6" description={
          <div className="test-description">
            Radium inline <code>:hover</code> and <code>:active</code> styles.
          </div>
      }/>
    </div>
  );
}

export default Tests;
