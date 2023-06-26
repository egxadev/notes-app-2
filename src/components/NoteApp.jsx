import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';
import DetailPage from '../pages/DetailPage';
import NotFoundPage from '../pages/NotFoundPage';

function NoteApp() {
    return (
        <div className="note-app">
            <header className="note-app__header">
                <h1>Notes App</h1>
                <Navigation />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/notes/new" element={<AddPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/notes/:id" element={<DetailPage />} />
                </Routes>
            </main>
        </div>
    );
}

export default NoteApp;
