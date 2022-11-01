import React, { Component } from 'react';
import Table from './table';
import MovieForm from './movieForm';
import {Route} from 'react-router-dom'

class MoviesTable extends Component {

    render() {
        const column = [
            { path: "title", label: "Title" },
            { path: "genre.name", label: "Genre" },
            { path: "numberInStock", label: "Stock" },
            { path: "dailyRentalRate", label: "Rate" }
        ]
        const { movies, onDelete } = this.props;
        return (
            <div>
            <Table column={column}
                sortColumn={this.props.sortColumn}
                onSort={this.props.onSort}
                movies={movies}
                onDelete={onDelete}/>

            {/* {movies.map(movie=>{
                <Route path={movie._id} component={MovieForm} />
            })}     */}
            
            </div>  
        );
    }
}

export default MoviesTable;
