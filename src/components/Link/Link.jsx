import React from 'react';
import PropTypes from 'prop-types';

export function Link (props) {
    return (
        <a href={props.link} className="btn btn-primary">Go somewhere</a>
    )
}

Link.propTypes = {
    link: PropTypes.string.isRequired,
}
