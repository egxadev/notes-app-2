import React from 'react';
import parser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { showFormattedDate } from '../utils/index';
import { getNote } from '../utils/local-data';
import NotFoundPage from '../pages/NotFoundPage';

function DetailPage() {
    const { id } = useParams();
    const note = getNote(id);

    if (!note) {
        return <NotFoundPage />;
    }

    return (
        <section>
            <h2>{note.title}</h2>
            <hr />
            <small className="grey">{showFormattedDate(note.createdAt)}</small>
            <div className="content">{parser(note.body)}</div>
        </section>
    );
}

export default DetailPage;
