import React from 'react';
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
            <article className="content">{note.body}</article>
        </section>
    );
}

export default DetailPage;
