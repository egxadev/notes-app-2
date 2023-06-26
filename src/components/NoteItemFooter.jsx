import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NoteItemFooter({ id, archived, onDelete, onArchive }) {
    return (
        <div className="note-item__footer">
            <Link to={`/notes/${id}`}>
                <img
                    src="/images/detail.png"
                    alt="Detail"
                    className="note-item__button"
                />
            </Link>
            {archived ? (
                <img
                    src="/images/unarchive.png"
                    alt="Archive"
                    onClick={() => onArchive(id)}
                    className="note-item__button"
                />
            ) : (
                <img
                    src="/images/archive.png"
                    alt="Archive"
                    onClick={() => onArchive(id)}
                    className="note-item__button"
                />
            )}
            <img
                src="/images/trash.png"
                alt="Delete"
                onClick={() => onDelete(id)}
                className="note-item__button"
            />
        </div>
    );
}

NoteItemFooter.propTypes = {
    id: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
};

export default NoteItemFooter;
