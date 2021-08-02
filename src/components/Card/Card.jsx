import React from 'react';
import {CardBody} from '../CardBody/CardBody';
import './Card.css';
import PropTypes from 'prop-types';

export function Card (props) {
    return (
        <div className='Card'>
            {props.children}
            <CardBody
                title={props.objectProps.title}
                text={props.objectProps.text}
                link={props.objectProps.link}
            />
        </div>
    )
}

Card.propTypes = {
    objectProps: PropTypes.object.isRequired,
}
