import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index';

function NoteItemBody({ title, body, createdAt }) {
    const date = showFormattedDate(createdAt);

    return (
        <div className="note-item__body">
            <h3 className="note-item__title">{title}</h3>
            <small className="grey">{date}</small>
            <p className="note-item__body">{body}</p>
        </div>
    );
}

NoteItemBody.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

export default NoteItemBody;
