import React from 'react';

const NoMatch = ({ location }) => (
	<div>
		<h3>Sorry, {location.pathname} doesn't exist!</h3>
	</div>
)

export default NoMatch;