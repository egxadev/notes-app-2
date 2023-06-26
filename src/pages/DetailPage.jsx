import React from 'react';
import { useParams } from 'react-router-dom';
import { getNotes, showFormattedDate } from '../utils';
import NotFoundPage from '../pages/NotFoundPage';

function DetailPage() {
    const { id } = useParams();
    const notes = getNotes();
    const note = notes.find((note) => note.id == id);

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
