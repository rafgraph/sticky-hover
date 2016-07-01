import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  location: PropTypes.object.isRequired,
};

function PageNotFound({ location }) {
  return (
    <div>
      <p>
        Page not found - the path, <code>{location.pathname}</code>, did not match any
        React Router routes.
      </p>
      <div>Would you like to see the <Link to="/">tests</Link>?</div>
    </div>
  );
}

PageNotFound.propTypes = propTypes;

export default PageNotFound;
