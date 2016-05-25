import React from 'react';
import StickyHoverFix from './StickyHoverFix';

function CustomJsTest({ title, description }) {
  const id=title.replace(/ /g, '-').toLowerCase();

  return (
    <div className="test">
      <h2 id={id}>{title}</h2>
      {description}
      <div className="anchor-tag">
        <StickyHoverFix
          tagType="a"
          hover="green"
          active="red"
          touchActive="blue"
          linkTo={`#${id}`}
          content="Anchor tag: hover is green, active is red, touch active is blue"
        />
      </div>
      <div className="button-tag">
        <StickyHoverFix
          tagType="button"
          hover="green"
          active="red"
          touchActive="blue"
          content="Button tag: hover is green, active is red, touch active is blue"
        />
      </div>
    </div>
  );
}

export default CustomJsTest;
