import React from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import NoteListArchive from '../components/NoteListArchive';
import SearchBar from '../components/SearchBar';
import {
    toggleArchiveNote,
    deleteNote,
    getAllNotes,
} from '../utils/local-data';

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return (
        <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
    );
}

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getAllNotes(),
            keyword: props.defaultKeyword || '',
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onDeleteHandler(id) {
        deleteNote(id);

        this.setState(() => {
            return {
                notes: getAllNotes(),
            };
        });
    }

    onArchiveHandler(id) {
        toggleArchiveNote(id);

        this.setState(() => {
            return {
                notes: getAllNotes(),
            };
        });
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            };
        });

        this.props.keywordChange(keyword);
    }

    render() {
        const notes = this.state.notes.filter((note) => {
            return note.title
                .toLowerCase()
                .includes(this.state.keyword.toLowerCase());
        });

        return (
            <section>
                <SearchBar
                    keyword={this.state.keyword}
                    keywordChange={this.onKeywordChangeHandler}
                />
                <h2>Notes List</h2>
                <NoteList
                    notes={notes}
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onArchiveHandler}
                />
                <h2>Archives List</h2>
                <NoteListArchive
                    notes={notes}
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onArchiveHandler}
                />
            </section>
        );
    }
}

HomePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
