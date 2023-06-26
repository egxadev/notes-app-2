import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { showFormattedDate } from '../utils/index';

function NoteItemBody({ title, body, createdAt }) {
    const date = showFormattedDate(createdAt);

    return (
        <div className="note-item__body">
            <h3 className="note-item__title">{title}</h3>
            <small className="grey">{date}</small>
            <div className="note-item__body">{parser(body)}</div>
        </div>
    );
}

NoteItemBody.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

export default NoteItemBody;
