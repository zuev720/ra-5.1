import React from 'react';
import {CardTitle} from '../CardTitle/CardTitle';
import {CardText} from '../CardText/CardText';
import {Link} from '../Link/Link';
import PropTypes from 'prop-types';

export function CardBody(props) {
    return (
        <div className="CardBody">
            <CardTitle title={props.title} />
            <CardText text={props.text} />
            <Link link={props.link} />
        </div>
    )
}

CardBody.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}
